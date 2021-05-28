import { Framework, FrameworkNode, ClassNode, Relation, TypeNode } from "./framework";
import { FrameworkBuilder } from "./frameworkBuilder";
import { translate } from "./translator";
import * as d3 from 'd3';

enum ArrowColor {
    white,
    green,
    blue,
    orange
}

/**
 * Create the HTML tree based on the framework
 */
export class TreeIndented {

    // Current ressource selected
    private selectedRessource    :FrameworkNode       = null;
    private selectedContent      :Array<HTMLElement>  = null;

    // Map<id, textElements> of every node of the tree
    // The array correspond to the list of text element of the node
    private nodeList             :Map<string, Array<HTMLElement>>  = new Map<string, Array<HTMLElement>>();

    // Map<id, element> of child div for every node of the tree
    private childrenList         :Map<string, HTMLElement>  = new Map<string, HTMLElement>();

    // List of every caret of the tree
    private caretList            :Map<string, HTMLElement>  = new Map<string, HTMLElement>();

    // Colors settings
    private colors               :Array<string>       = ['#cf000f', '#f7ca18', '#00b16a'];
    private fontColor            :string              = 'rgba(255, 255, 255, .85)';
    private fontHoverColor       :string              = 'rgba(255, 255, 255, 1)';
    private infoFontColor        :string              = 'black';
    private infoBackgroundColor  :string              = 'white';

    private explanationContainer :HTMLElement         = null;
    private treeContainer        :HTMLElement         = null;
    private treeRoot             :HTMLElement         = null;
    private arrowContainer       :HTMLElement         = null;
    private titleContainer       :HTMLElement         = null;
    private tooltip              :HTMLElement         = null;
    private framework            :Framework           = null;

    // Language
    readonly language :string = 'fr';

    // Caret objet utilities
    readonly _caretDown   :string = `<svg width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" d="M3.204 5L8 10.481 12.796 5H3.204zm-.753.659l4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659z"/>
                                    </svg>`;
    readonly _sCaretDown  :string = `display: inline-block; 
                                     margin-left: 10px;
                                     vertical-align: bottom;
                                     padding-left: 3px;
                                     padding-bottom: 3px;
                                     box-sizing: border-box;
                                     width: 21px;
                                     cursor: pointer`;
    readonly _caretRight  :string = `<svg width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" d="M6 12.796L11.481 8 6 3.204v9.592zm.659.753l5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753z"/>
                                    </svg>`;
    readonly _sCaretRight :string = `display: inline-block; 
                                     margin-left: 10px;
                                     vertical-align: bottom;
                                     padding-left: 5px;
                                     padding-bottom: 3px;
                                     box-sizing: border-box;
                                     width: 21px;
                                     cursor: pointer`;
    readonly _sNoCaret    :string = `display: inline-block; 
                                     margin-left: 10px;
                                     width : 21px;
                                     vertical-align: bottom;
                                     padding-left: 5px;
                                     padding-bottom: 3px;
                                     box-sizing: border-box;
                                     pointer-event: none;`;

    constructor() {
        this.explanationContainer = document.getElementById("explanation-container"); 

        //------ Header row ------
        this.titleContainer = document.createElement('div');
        this.titleContainer.setAttribute('class', 'row');
        this.titleContainer.style.paddingRight = '20px';
        this.titleContainer.style.paddingBottom = '25px';
        this.titleContainer.style.width = '100%';
        this.titleContainer.style.height ='1.5em';
        this.titleContainer.style.borderImage ='linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, .85) 1 100%';

        this.createInfoIcon();
        
        // Add headers
        let blank = document.createElement('span');
        blank.setAttribute('class', 'col');
        this.titleContainer.appendChild(blank);
        this.titleContainer.appendChild(this.createHeader('mastery'));
        this.titleContainer.appendChild(this.createHeader('trust'));

        // Create line
        let borderBottom = document.createElement('div');
        borderBottom.style.display = 'block';
        borderBottom.style.height = '1px';
        borderBottom.style.width = '100%';
        borderBottom.style.float = 'right';
        borderBottom.style.background = 'linear-gradient(to right, rgba(255, 255, 255, 0), rgba(255, 255, 255, .85))';

        this.titleContainer.appendChild(borderBottom);
        
        this.explanationContainer.appendChild(this.titleContainer);

        // Tree row
        this.treeContainer = document.createElement('div');
        this.treeContainer.setAttribute('id', 'treeContainer');
        this.treeContainer.setAttribute('class', 'row');
        this.treeContainer.style.position = 'relative';
        this.treeContainer.style.overflow = 'auto';
        //this.treeContainer.style.paddingLeft = '15px';
        this.treeContainer.style.paddingRight = '20px';
        this.treeContainer.style.maxHeight = (this.explanationContainer.offsetHeight - 40).toString() +'px';
        this.treeContainer.style.margin = 'auto';
        this.treeContainer.style.border = 'solid 1px rgba(0,0,0,0)';

        // Svg for arrow
        this.arrowContainer = document.createElement('div');
        this.arrowContainer.setAttribute('id', 'arrowContainer');
        this.arrowContainer.style.pointerEvents = 'none';
        this.arrowContainer.style.position = 'absolute';
        this.arrowContainer.style.zIndex = '2';
        this.arrowContainer.style.width = '100%';

        this.treeContainer.appendChild(this.arrowContainer);

        this.explanationContainer.appendChild(this.treeContainer);

        // Tooltip
        this.tooltip = document.getElementById('tooltip');
        this.tooltip.style.display = 'none';
        this.tooltip.style.backgroundColor = '#fff';
        this.tooltip.style.color = '#222';
        this.tooltip.style.padding = '.5em';
        this.tooltip.style.textShadow = '#f5f5f5 0 1px 0';
        this.tooltip.style.borderRadius = '2px';
        this.tooltip.style.maxWidth = '350px';
        this.tooltip.style.position = 'absolute';
        this.tooltip.style.fontWeight = 'bold';
        this.tooltip.style.zIndex = '3';

        this.createInfoPanel();

        this.framework = new FrameworkBuilder().build();
    }

    private createInfoIcon() :void {
        let info = document.createElement('div');
        info.innerHTML = `<svg id="infoIcon" width="20px" height="20px" viewBox="0 0 16 16"  fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                    <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z"/>
                                </svg>`;
        
        info.setAttribute('class', 'col-1');

        this.titleContainer.appendChild(info);
    }

    private createInfoPanel() :void {
        let infoPanel = document.createElement('div');
        infoPanel.innerHTML =  `<h4> Informations </h4>
                                <hr style="background-color:${this.fontColor} "/>
                                <p><b>${translate[this.language].mastery.name}</b>:<br/>${translate[this.language].mastery.description}</p>
                                <p><b>${translate[this.language].trust.name}</b>:<br/>${translate[this.language].trust.description}</p>`;

        let infoPanelStyle :string =   `border-radius:    15px; 
                                        opacity:          .95; 
                                        position:         absolute; 
                                        padding:          30px; 
                                        top:              30px; 
                                        left:             5px; 
                                        color:            ${this.infoFontColor};
                                        background-color: ${this.infoBackgroundColor}; 
                                        width:            96%; 
                                        height:           95%;
                                        z-index:          5; 
                                        display:          none`;

        infoPanel.setAttribute('style', infoPanelStyle);
        
        document.getElementById('infoIcon').setAttribute('style', 'cursor: help; color:'+this.fontColor);
        document.getElementById('infoIcon').addEventListener('mouseenter', () => { infoPanel.style.display = 'block'; });
        document.getElementById('infoIcon').addEventListener('mouseleave', () => { infoPanel.style.display = 'none'; });

        this.explanationContainer.appendChild(infoPanel);
    }

    // Add headers
    private createHeader(category :string) :HTMLElement {
        let elem = document.createElement('span');
        elem.textContent = translate[this.language][category].name;
        elem.setAttribute("style", "width: 75px; float: right; text-align: right; color: "+this.fontColor+"; margin-right: -3pt;");
        return elem;
    }

    /**
     * Iterate over every nodes and draw an element for each one
     */
    public displayNodes() :void {
        let nodesNotYetDrawn :Map<string, FrameworkNode> = new Map<string, FrameworkNode>();
        
        this.framework.getFrameworkNodes().forEach(node => {
            if (!this.draw(node)) {
                nodesNotYetDrawn.set(node.getId(), node);
            }
        });

        while (nodesNotYetDrawn.size > 0) {
            nodesNotYetDrawn.forEach( (node, index) => {
                if (node !== undefined && this.draw(node)) {
                    nodesNotYetDrawn.delete(index);
                }
            });
        }
    }

    /**
     * Create a div element associated to the node and add it to his parent in the tree
     * @param node the node to be draw
     * @returns true if the node has been drawn or false if it couldn't
     */
    public draw(node :FrameworkNode) :Boolean {
        if (node.getParent() !== undefined && node.getParent() !== null && document.getElementById('tree-bloc-'+node.getParent().getId()) === null) {
            return false;
        }
        else {
            let elem = document.createElement('div');
            elem.setAttribute('id', 'tree-node-'+node.getId());
            elem.style.color = this.fontColor;
            elem.style.fontFamily = 'cursive';
            elem.style.width = '-webkit-fill-available';
            elem.style.marginTop = '10px';
            elem.style.paddingLeft = '20px';

            let textDiv :Array<HTMLElement> = [];

            // Add the caret if the node got some children
            let caret = document.createElement('span');
            if (node.getChildren().length > 0) {
                caret.innerHTML = this._caretDown;
                caret.setAttribute('style', this._sCaretDown);
            }
            else {
                caret.setAttribute('style', this._sNoCaret);
            }

            elem.appendChild(caret);
            this.caretList.set(node.getId(), caret);

            // Add the circle span with appropriate color if the node isn't a ressource
            if (!node.isRessource()) {
                let color;
                let border = 'solid 1px #808080';
                if (node.getMastery() === undefined) 
                    color = 'rgba(0,0,0,0)';
                else {
                    let mastery = node.getMastery();

                    if (mastery < 0.4)
                        color = this.colors[0];
                    else if (mastery < 0.8)
                        color = this.colors[1];
                    else
                        color = this.colors[2];

                    border = 'none';
                }

                let score = document.createElement('span');
                score.style.display = 'inline-block';
                score.style.boxSizing = 'border-box';
                score.style.verticalAlign = 'text-top';
                score.style.borderRadius = '100%';
                score.style.border = border;
                score.style.marginLeft = '5px';
                if (node.getClassNode() === ClassNode.basic) {
                    score.style.width = '12px';
                    score.style.height = '12px';
                    score.style.background = color;
                    score.style.opacity = '.5';
                }
                else {
                    score.style.width = '18px';
                    score.style.height = '18px';
                    score.style.background = color;
                }
                elem.appendChild(score);
            }

            // Add the name of the node
            let content = document.createElement('span');
            content.style.paddingLeft = "5px";
            if (node.isRessource()) {
                content.style.fontStyle = 'italic';
                content.textContent += '- ';
            } else if (node.getTrust() === 0) 
                content.style.opacity = '.3';

            content.textContent += node.getName().replace(new RegExp("_", "g"), ' ');
            content.style.cursor  = 'pointer';
            content.className += ClassNode[node.getClassNode()];

            elem.appendChild(content);
            textDiv.push(content);

            // Add rates of the node
            let contentRates :Array<HTMLElement> = [content];

            let rateValue = '';
            if (!node.isRessource())
                rateValue = this.formatValue(node.getTrust());

            let trust :HTMLElement = this.createStatElement(rateValue);
            if(!node.isRessource() && node.getTrust() === 0) 
                trust.style.opacity = '.3';

            trust.className += ClassNode[node.getClassNode()];

            elem.appendChild(trust);
            contentRates.push(trust);
            textDiv.push(trust);

            if (!node.isRessource())
                rateValue = this.formatValue(node.getMastery());

            let mastery :HTMLElement = this.createStatElement(rateValue);
            if(!node.isRessource() && node.getTrust() === 0) 
                mastery.style.opacity = '.3';

            mastery.className += ClassNode[node.getClassNode()];

            elem.appendChild(mastery);
            contentRates.push(mastery);
            textDiv.push(mastery);
            
            // Add events on the content
            content.addEventListener('mouseenter', this.handleContentMouseEnter.bind(this, contentRates, node));
            content.addEventListener('mouseleave', this.handleContentMouseLeave.bind(this, contentRates, node));
            content.addEventListener('click', this.handleContentClick.bind(this, contentRates, node));

            // Add children div
            let children = document.createElement('div');
            children.id  = 'tree-bloc-'+node.getId();
            children.style.borderLeft = "dashed 1px rgba(255, 255, 255, .3)";
            children.style.marginLeft = "20px";
            elem.appendChild(children);

            // Add the node at his parent, or in case at the root
            if(node.getParent() !== undefined && node.getParent() !== null){
                document.getElementById('tree-bloc-'+node.getParent().getId()).appendChild(elem);
            }
            else{
                this.treeContainer.appendChild(elem);
                this.treeRoot = elem;
            }

            // Add events on the caret
            caret.addEventListener('click', this.toggleCaret.bind(this, caret, children));
            if (!node.isRessource() && node.getChildren().length > 0 && node.getHasRecommandedChild() === false) {
                children.style.display = 'none';
                caret.innerHTML = this._caretRight;
                caret.setAttribute('style', this._sCaretRight);
            }

            this.nodeList.set(node.getId(), textDiv);
            this.childrenList.set(node.getId(), children);

            return true;
        }
    }

    // Event handlers
    private handleContentMouseEnter(content :Array<HTMLElement>, node :FrameworkNode, evt :Event) :void {
        content.forEach(element => {
            element.style.textDecoration = 'underline';
        });
    }

    private handleContentMouseLeave(content :Array<HTMLElement>, node :FrameworkNode, evt :Event) :void {
        if (node !== this.selectedRessource) {
            content.forEach(element => {
                element.style.textDecoration = 'none';
            });
        }
    }

    private handleContentClick(content :Array<HTMLElement>, node :FrameworkNode, evt :Event) :void {
        
        // Active only if the node clicked is a recommandation
        if (node.getClassNode() === ClassNode.recommandation) {

            // Case when nothing is selected
            if (this.selectedRessource === null) {

                // We make every node exclude of the path in low opacity
                this.nodeList.forEach((textElementList, id) => {
                    if (this.framework.getFrameworkNodes().get(id).getClassNode() === ClassNode.basic) {
                        textElementList.forEach(element => {
                            element.style.opacity = '.3';
                        });
                    }
                });

                this.selectedRessource = node;
                this.selectedContent = content;

                // We draw arrow between the recommandation and the objectif
                this.drawPath(node.getId());

                // And we disable every caret to avoid the user to struck arrow
                this.caretList.forEach(caret => {
                    caret.style.opacity = '.3';
                    caret.style.cursor  = 'default';
                });
            }

            // Case when the node clicked was already selected
            else if (this.selectedRessource === node) {
                
                // We erase every arrow
                this.cleanPath();

                // We reactive every caret
                this.caretList.forEach(caret => {
                    caret.style.opacity = '1';
                    caret.style.cursor  = 'pointer';
                });

                this.selectedRessource = null;
                this.selectedContent = null;

                // We make every node came back to his normal opacity
                this.nodeList.forEach((textElementList, id) => {
                    let node :FrameworkNode = this.framework.getFrameworkNodes().get(id);
                    if (node.getClassNode() === ClassNode.basic && (node.isRessource() || node.getTrust() !== 0)) {
                        textElementList.forEach(element => {
                            element.style.opacity = '1';
                        });
                    }
                });
            }

            // Case when the node clicked is an other recommandation
            else if (this.selectedRessource !== node) {

                // We make every node exclude of the path in low opacity
                this.nodeList.forEach((textElementList, id) => {
                    if (this.framework.getFrameworkNodes().get(id).getClassNode() === ClassNode.basic) {
                        textElementList.forEach(element => {
                            element.style.opacity = '.3';
                        });
                    }
                });

                this.selectedRessource = node;
                this.selectedContent = content;

                // We draw arrow between the recommandation and the objectif
                this.drawPath(node.getId());

                // And we disable every caret to avoid the user to struck arrow
                this.caretList.forEach(caret => {
                    caret.style.opacity = '.3';
                    caret.style.cursor  = 'default';
                });
            }
        }
    }

    private toggleCaret(caret :HTMLElement, children :HTMLElement, evt :Event) {
        if (this.selectedRessource === null) {
            if(children.style.display === 'none'){
                children.style.display = 'block';
                caret.innerHTML = this._caretDown;
                caret.setAttribute('style', this._sCaretDown);
            }
            else{
                children.style.display = 'none';
                caret.innerHTML = this._caretRight;
                caret.setAttribute('style', this._sCaretRight);
            }
        }
    }

    private createStatElement(text :string) :HTMLElement {
        let stat = document.createElement('span');
        stat.setAttribute('style', 'float: right; width: 75px; text-align: right; fontFamily: "Courier New", Courier, monospace');
        stat.textContent = text;
        return stat;
    }

    /**
     * Draw the arrows between the recommandation and the objectif
     * @param nodeId the id of the recommandation
     */
    private drawPath(nodeId :string) :void {
        this.cleanPath();

        this.framework.getFrameworkNodes().forEach((node :FrameworkNode) => {
            if (!node.isRessource() && node.getChildren().length > 0) {

                let children :HTMLElement = this.childrenList.get(node.getId());
                let caret :HTMLElement = this.caretList.get(node.getId());

                if (node.getHasRecommandedChild() === true) {
                    children.style.display = 'block';
                    caret.innerHTML = this._caretDown;
                    caret.setAttribute('style', this._sCaretDown);
                }
                else {
                    children.style.display = 'none';
                    caret.innerHTML = this._caretRight;
                    caret.setAttribute('style', this._sCaretRight);
                }
            }
        });
        
        // Fix the size of the arrow container as the same as the size of the tree
        document.getElementById('arrowContainer').style.height = this.treeRoot.offsetHeight.toString()+'px';

        let svg = d3.select('#arrowContainer')
            .append('svg')
            .style('height', '100%')
            .style('width', '100%');

        let recommandationPath :Array<[Relation, FrameworkNode]> = this.framework.getRecommandationsPath().get(nodeId);

        let childId :string = nodeId;

        recommandationPath.forEach((path) => {         
            let parentId :string = path[1].getId();

            // Make all node in the path visible
            this.nodeList.get(parentId).forEach(element => {
                element.style.opacity = '1';
            });

            let data :[number, number][] = this.getPointOfArrow(childId, parentId);

            let childNode :FrameworkNode = this.framework.getFrameworkNodes().get(childId);
            let parentNode :FrameworkNode = this.framework.getFrameworkNodes().get(parentId);

            this.drawArrow(svg, data, path[0], childNode, parentNode);

            childId = parentId;
        });
    }

    /**
     * Erase all arrow of the view
     */
    private cleanPath() :void {
        this.arrowContainer.innerHTML = '';
    }

    /**
     * Draw the arrow which pass by some points in data
     * @param svg the div where to draw the arrow
     * @param data the point the arrow have to follow
     * @param relation the relation corresponding to the arrow
     */
    private drawArrow(svg :d3.Selection<SVGElement, any, any, any>, data :[number, number][], relation :Relation, childNode :FrameworkNode, parentNode :FrameworkNode) :void {
        var curveFunc = d3.line()
            .curve(d3.curveBasis)
            .x(function(d) { return d[0] })
            .y(function(d) { return d[1] })

        // We get the appropriate color depending of the relation
        let arrowColor :ArrowColor = this.getArrowColor(relation);
            
        svg.append('path')
            .attr('id', (data[0][0]+data[0][1]).toString())
            .attr('d', curveFunc(data))
            .attr('stroke', this.getRGBColor(arrowColor))
            .attr('stroke-width', 5)
            .attr('fill', 'none')
            .attr('marker-start', 'url(#'+ArrowColor[arrowColor]+'ArrowHead)')
            .style('pointer-events', 'auto')
            .on('mousemove', (event, d) => {
                
                // Make the arrow bigger when hover
                document.getElementById((data[0][0]+data[0][1]).toString()).style.strokeWidth = '8';

                // And display the tooltip
                this.tooltip.style.display = 'block';

                let linkColor :string = null;
                if (arrowColor === ArrowColor.white) 
                    linkColor = '#222';
                else 
                    linkColor = this.getRGBColor(arrowColor);
                
                this.tooltip.style.left = this.treeContainer.offsetLeft + event.clientX + 'px';
                this.tooltip.style.top = this.treeContainer.offsetTop + event.clientY + 'px';

                // Update of the content of the tooltip
                let childName :string = childNode.getName().replace(new RegExp("_", "g"), ' ').replace(new RegExp("de une", "g"), 'd\'une').toLowerCase();
                let parentName :string = parentNode.getName().replace(new RegExp("_", "g"), ' ').replace(new RegExp("de une", "g"), 'd\'une').toLowerCase();

                // Fix the synthax error "de le"
                let transitionText :string = '';
                if (!childNode.isRessource() && parentNode.getType() === TypeNode.skill) {
                    let textForRelation :string = this.getTooltipTextForRelation(relation);
                    transitionText = textForRelation.substring(0, textForRelation.length - 1)
                        + 'u</span> '
                        + this.getTooltipTextForTypeNode(parentNode.getType()).substring(3)
                        + '<i style="font-weight:100;"> ' + parentName + '</i>.</div>';
                }
                else {
                    transitionText = this.getTooltipTextForRelation(relation)
                        + '</span> '
                        + this.getTooltipTextForTypeNode(parentNode.getType())
                        + '<i style="font-weight:100;"> ' + parentName + '</i>.</div>';
                }

                // Make the first letter to uppercase
                let childType :string = this.getTooltipTextForTypeNode(childNode.getType());
                let childTypeWithMaj :string = childType[0].toUpperCase() + childType.substr(1)

                this.tooltip.innerHTML = '<div>'
                        + childTypeWithMaj
                        + '<i style="font-weight:100;"> ' + childName + '</i> '
                        + '<span style="color:' + linkColor +';font-weight:900;"> ' 
                        + transitionText;
                
                // Display the rate of the child node if the user got low mastery on it
                if (!childNode.isRessource() && childNode.getMastery() < 0.7) {
                    this.tooltip.innerHTML += '</br></div>'
                            + '<div>Taux de maîtrise actuel: '
                            + '<span style="color:red">' + this.formatValue(childNode.getMastery()) + '</span>'
                            + '</div><div>Taux minimum nécessaire: 70%</div>';
                }
            })
            .on('mouseout', () => {
                
                // Hide the tooltip when mouse leave
                this.tooltip.style.display = 'none';
                
                // And make it back to his normal size
                document.getElementById((data[0][0]+data[0][1]).toString()).style.strokeWidth = '5';
            });
    }

    /**
     * Get the points that the arrow will need to follow depending of the relation between nodes
     * @param childId
     * @param parentId
     * @return the list of point
     */
    private getPointOfArrow(childId :string, parentId :string) :[number, number][] {
        let data :[number, number][] = [];
        let child :HTMLElement = document.getElementById('tree-node-'+childId);
        let parent :HTMLElement = document.getElementById('tree-node-'+parentId);

        // List of offset to correctly place the arrow in the tree
        let objectifOffsetLeft           :number = 40;
        let objectifOffsetTop            :number = 40;
        let objectifNoRelationOffsetLeft :number = 25;
        let objectifNoRelationOffsetTop  :number = 25;
        let recommandationOffsetLeft     :number = 40;
        let recommandationOffsetTop      :number = 15;
        let basicChildOffsetLeft         :number = 20;
        let basicChildOffsetTop          :number = 5;
        let basicParentOffsetLeft        :number = 40;
        let basicParentOffsetTop         :number = 25;
        let noRelationChildOffsetLeft    :number = 20;
        let noRelationChildOffsetTop     :number = 5;
        let noRelationParentOffsetLeft   :number = 20;
        let noRelationParentOffsetTop    :number = 15;

        // Case where the child is the recommandation
        if (this.framework.getFrameworkNodes().get(childId).isRessource()) {
            let childOffsetLeft : number = child.offsetLeft + recommandationOffsetLeft;
            let childOffsetTop : number = child.offsetTop + recommandationOffsetTop;
            data.push([childOffsetLeft, childOffsetTop]);

            // If the parent is the objectif node
            if (this.framework.getObjectif().getId() === parentId) {
                let parentOffsetLeft : number = parent.offsetLeft + objectifOffsetLeft;
                let parentOffsetTop : number = parent.offsetTop + objectifOffsetTop;

                // Add point to make the curse smothe
                data.push([parentOffsetLeft, childOffsetTop]);

                data.push([parentOffsetLeft, parentOffsetTop]);
            }
            else {
                let parentOffsetLeft : number = parent.offsetLeft + basicParentOffsetLeft;
                let parentOffsetTop : number = parent.offsetTop + basicParentOffsetTop;

                // Add point to make the curse smothe
                data.push([parentOffsetLeft, childOffsetTop]);

                data.push([parentOffsetLeft, parentOffsetTop]);
            }
            
            return data;
        }

        // Case where the child is a basic hierarchical child of his parent
        else if (this.framework.getFrameworkNodes().get(parentId).getChildren().indexOf(childId) !== -1) {
            let childOffsetLeft : number = child.offsetLeft + basicChildOffsetLeft;
            let childOffsetTop : number = child.offsetTop + basicChildOffsetTop;
            data.push([childOffsetLeft, childOffsetTop]);

            // If the parent is the objectif node
            if (this.framework.getObjectif().getId() === parentId) {
                let parentOffsetLeft : number = parent.offsetLeft + objectifOffsetLeft;
                let parentOffsetTop : number = parent.offsetTop + objectifOffsetTop;

                // Add a point to make the curse smothe
                data.push([parentOffsetLeft, childOffsetTop]);

                data.push([parentOffsetLeft, parentOffsetTop]);
            }
            else {
                let parentOffsetLeft : number = parent.offsetLeft + basicParentOffsetLeft;
                let parentOffsetTop : number = parent.offsetTop + basicParentOffsetTop;

                // Add a point to make the curse smothe
                data.push([parentOffsetLeft, childOffsetTop]);

                data.push([parentOffsetLeft, parentOffsetTop]);
            }
            
            return data;
        }

        // Case where there is no relation between nodes
        else {
            let childOffsetLeft : number = child.offsetLeft + noRelationChildOffsetLeft;
            let childOffsetTop : number = child.offsetTop + noRelationChildOffsetTop;
            data.push([childOffsetLeft, childOffsetTop]);

            // If the parent is the objectif node
            if (this.framework.getObjectif().getId() === parentId) {
                let parentOffsetLeft : number = parent.offsetLeft + objectifNoRelationOffsetLeft;
                let parentOffsetTop : number = parent.offsetTop + objectifNoRelationOffsetTop;

                // Add a point to make the curse smothe
                let posXOfCurve :number = Math.min(childOffsetLeft, parentOffsetLeft) - 30;
                data.push([posXOfCurve, childOffsetTop]);

                let middleOfCurve :number = ((parentOffsetTop - childOffsetTop) / 2) + childOffsetTop
                data.push([posXOfCurve, middleOfCurve]);
                data.push([posXOfCurve, parentOffsetTop]);

                data.push([parentOffsetLeft, parentOffsetTop]);
            }
            else {
                let parentOffsetLeft : number = parent.offsetLeft + noRelationParentOffsetLeft;
                let parentOffsetTop : number = parent.offsetTop + noRelationParentOffsetTop;

                // Add a point to make the curse smothe
                let posXOfCurve :number = Math.min(childOffsetLeft, parentOffsetLeft) - 30;
                data.push([posXOfCurve, childOffsetTop]);

                let middleOfCurve :number = ((parentOffsetTop - childOffsetTop) / 2) + childOffsetTop
                data.push([posXOfCurve, middleOfCurve]);
                data.push([posXOfCurve, parentOffsetTop]);

                data.push([parentOffsetLeft, parentOffsetTop]);
            }

            return data;
        }
    }

    // Get the color the arrow should be depending of the relation
    private getArrowColor(relation :Relation) :ArrowColor {
        switch (relation) {
            case Relation.hasSkill:
            case Relation.isSkillOf:
            case Relation.hasKnowledge:
            case Relation.isKnowledgeOf:
            case Relation.isComposedOf:
            case Relation.composes:
            case Relation.comprises:
            case Relation.isComprisedIn:
            case Relation.hasLearning:
            case Relation.isLearningOf:
            case Relation.hasTraining:
            case Relation.isTrainingOf:
                return ArrowColor.white;

            case Relation.requires:
            case Relation.isRequiredBy:
                return ArrowColor.blue;

            case Relation.isLeverOfUnderstandingOf:
            case Relation.facilitatesUnderstandingOf:
                return ArrowColor.green;

            case Relation.complexifies:
            case Relation.isComplexificationOf:
                return ArrowColor.orange;

            default:
                return ArrowColor.white;
        }
    }

    // Get the text to display in the tooltip depending of the relation 
    private getTooltipTextForRelation(relation :Relation) :string {
        switch(relation) {
            case (Relation.hasSkill):
            case (Relation.isSkillOf):
            case (Relation.hasKnowledge):
            case (Relation.isKnowledgeOf):
            case (Relation.composes):
            case (Relation.isComposedOf):
            case (Relation.comprises):
            case (Relation.isComprisedIn):
                return 'est un composant de';
                
            case (Relation.complexifies):
            case (Relation.isComplexificationOf):
                return 'est une complexification de';
                
            case (Relation.facilitatesUnderstandingOf):
            case (Relation.isLeverOfUnderstandingOf):
                return 'est un levier de compréhension de';
                
            case (Relation.requires):
            case (Relation.isRequiredBy):
                return 'est un prérequis de';
                
            case (Relation.hasLearning):
            case (Relation.isLearningOf):
            case (Relation.hasTraining):
            case (Relation.isTrainingOf):
                return 'permet de travailler';
                
            default:
                return relation;
        }
    }

    // Get the text to display in the tooltip depending of the type of the node 
    private getTooltipTextForTypeNode(type :TypeNode) :string {
        switch(type) {
            case (TypeNode.competency):
                return "la compétence";
            case (TypeNode.knowledge):
                return "la connaissance";
            case (TypeNode.skill):
                return "le savoir-faire";
            case (TypeNode.resource):
                return "la ressource";
            default:
                return " ";
        }
    }

    // Get the RGB code from a color
    private getRGBColor(color :ArrowColor) :string {
        switch(color) {
            case(ArrowColor.white):
                return 'white';

            case(ArrowColor.green):
                return 'rgb(90, 200, 90)';

            case(ArrowColor.blue):
                return 'rgb(80, 175, 220)';
                
            case(ArrowColor.orange):
                return 'rgb(255, 135, 55)';
        }
    }

    // Convert number to percentage
    private formatValue(value :number) :string {
        if(isNaN(value) || value === undefined || value === null) 
            value = 0;
        return Math.round(value * 100).toString()+'%';
    }
}