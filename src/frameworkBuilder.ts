import { Framework, FrameworkNode, Relation, isHierarchicalRelation, TypeNode } from "./framework";
import { FrameworkObjectBD, FrameworkNodeBD, FrameworkResourceBD, getFrameworkSample } from "./profil";

export class FrameworkBuilder {
    
    // The framework object from base
    private frameworkObjectBD :FrameworkObjectBD;
        
    // The tree object
    private framework :Framework;

    constructor() {
        this.frameworkObjectBD = getFrameworkSample();
        this.framework = new Framework(this.frameworkObjectBD.name);
    }

    /**
     * Build a framework including the initialisation of every nodes and relations 
     * @returns the framework object
     */
    public build() :Framework {    
        
        // Get every nodes of the framework
        let frameworkNodesBD :Array<FrameworkNodeBD> = Array.from(this.frameworkObjectBD.objects);

        // Map<id, resource> of resources
        let frameworkResourcesBD :Map<string, FrameworkResourceBD> = new Map<string, FrameworkResourceBD>();

        // Array<name> of nodes already created
        let createdNodes :Array<string> = [];

        // Map<name, Array<id>> which refered all nodes instancied for the name
        let duplicataOfNodes :Map<string, Array<string>> = new Map<string, Array<string>>();

        // Map<id, Array<id>> which refered all resources instancied for the id
        let duplicataOfResources :Map<string, Array<string>> = new Map<string, Array<string>>();
        this.frameworkObjectBD.resources.forEach((frameworkResourceBD :FrameworkResourceBD) => {
            frameworkResourcesBD.set(frameworkResourceBD.id, frameworkResourceBD);
            duplicataOfResources.set(frameworkResourceBD.id, []);
        });

        // Map<name, Array<id>> which refered all parents already linked for each node
        let linkedParents :Map<string, Array<string>> = new Map<string, Array<string>>();

        let root :FrameworkNode = new FrameworkNode(this.generateId(), this.frameworkObjectBD.name, null, TypeNode.competency, null, null);
        this.framework.addNode(root);
        createdNodes.push(root.getName());
        duplicataOfNodes.set(root.getName(), [root.getId()]);

        // Increment var for the while loop below
        let i  :number = 0;
        
        while (frameworkNodesBD.length > 0) {
            // "increment" will be False if we removed an element for fw, because 'i' will be on the new current node position.
            let increment :boolean         = true;
            let node      :FrameworkNodeBD = frameworkNodesBD[i];
            let parents   :Array<string>   = node.relations.isSkillOf.concat(node.relations.isKnowledgeOf).concat(node.relations.composes);

            // For the first level nodes, we simply link them to the root of the tree.
            if (parents.length === 0) {
                let frameworkNode :FrameworkNode = new FrameworkNode(this.generateId(), node.name, root, this.getTypeNode(node.type), null, null);
                frameworkNode.getParent().addChild(frameworkNode.getId());
                this.framework.addNode(frameworkNode);
                createdNodes.push(frameworkNode.getName());
                duplicataOfNodes.set(frameworkNode.getName(), [frameworkNode.getId()]);

                frameworkNodesBD.splice(i, 1);
                increment = false;
            }
            else {
                // Adds the "linkedParents" names to the node, so if we have to loop again on the node, we know which 
                // node<->parentNode link has been traited or not.
                if (linkedParents.get(node.name) === undefined) linkedParents.set(node.name, []);

                if (duplicataOfNodes.get(node.name) === undefined) duplicataOfNodes.set(node.name, []);

                parents.forEach((parentName :string) => {
                    if (linkedParents.get(node.name).indexOf(parentName) < 0) {
                        if (createdNodes.indexOf(parentName) > -1) {
                            duplicataOfNodes.get(parentName).forEach((parentDuplicataId :string) => {
                                let parent :FrameworkNode = this.framework.getFrameworkNodes().get(parentDuplicataId);
                                let frameworkNode :FrameworkNode = new FrameworkNode(this.generateId(), node.name, parent, this.getTypeNode(node.type), node.mastery, node.trust);
                                parent.addChild(frameworkNode.getId());
                                this.framework.addNode(frameworkNode);
                                duplicataOfNodes.get(node.name).push(frameworkNode.getId());  
                                linkedParents.get(node.name).push(parentName);
                            });
                        }
                    }
                });

                // If we traited all the node<->parentNode links, we can remove the node from the framework and add resources
                if (linkedParents.get(node.name).length === parents.length) {
                    let resources :Array<string> = node.relations.hasLearning.concat(node.relations.hasTraining);

                    if (resources.length !== 0) {
                        duplicataOfNodes.get(node.name).forEach((nodeDuplicataId :string) => {
                            resources.forEach((resourceId :string) => {
                                let parent :FrameworkNode = this.framework.getFrameworkNodes().get(nodeDuplicataId);
                                let frameworkResource :FrameworkNode = new FrameworkNode(this.generateId(), frameworkResourcesBD.get(resourceId).name, parent, TypeNode.resource, null, null);
                                parent.addChild(frameworkResource.getId());
                                this.framework.addNode(frameworkResource);
                                duplicataOfResources.get(resourceId).push(frameworkResource.getId());
                            });
                        });
                    }

                    createdNodes.push(root.getName());
                    frameworkNodesBD.splice(i, 1);
                    increment = false;
                }
            }

            // Increments or resets until we're finished with the nodes.
            if (increment) i += 1;
            if (i >= frameworkNodesBD.length) i = 0;
        }
        
        // To replace by real objectif
        this.framework.setObjectif(this.framework.getFrameworkNodes().get(duplicataOfNodes.get("Manipuler_des_variables")[0]));
        
        // To replace by real recommandations
        // Array<Array<[Relation, id]>> which contains every paths of recommandations
        let recommandationPaths :Array<Array<[Relation, string]>> = [];

        // <Array<[Relation, name]>> because the id is currently different in trace
        // so we recognize the node by name and then find the good one
        let path :Array<[Relation, string]> = [];
        path.push([null, "asker:749"]);
        path.push([Relation.hasTraining, "Modifier_la_valeur_de_une_variable"]);
        path.push([Relation.complexifies, "Manipuler_des_variables"]);
        recommandationPaths.push(path);

        path = [];
        path.push([null, "asker:758"]);
        path.push([Relation.hasTraining, "Récupérer_des_données_saisies_par_lutilisateur"]);
        path.push([Relation.hasSkill, "Ecrire_des_scripts_interactifs"]);
        path.push([Relation.isLeverOfUnderstandingOf, "Manipuler_des_variables"]);
        recommandationPaths.push(path);

        path = [];
        path.push([null, "asker:754"]);
        path.push([Relation.hasTraining, "Connaître_le_caractère_de_substitution_de_commande"]);
        path.push([Relation.requires, "Banaliser_un_caractère"]);
        path.push([Relation.isLeverOfUnderstandingOf, "Manipuler_des_variables"]);
        recommandationPaths.push(path);

        recommandationPaths.forEach(path => {
            
            // The path to objectif of node without resource
            let nodePath :Array<[Relation, FrameworkNode]> = [];

            // Use for get the good child
            let lastParent :FrameworkNode = null

            for (let i :number = path.length - 1; i > 0; i--) {
                // For the objectif or not hierarchical children
                // we just get the first one we find
                if (i === path.length - 1 || !isHierarchicalRelation(path[i+1][0]) ) {
                    lastParent = this.framework.getFrameworkNodes().get(duplicataOfNodes.get(path[i][1])[0])
                    nodePath.push([path[i][0], lastParent]);
                }
                // Else we need to find the good child
                else {
                    let nodeInPath :FrameworkNode = null;

                    lastParent.getChildren().forEach((childId :string) => {
                        let child :FrameworkNode = this.framework.getFrameworkNodes().get(childId);
                        if (child.getName() === path[i][1]) {
                            nodeInPath = child;
                        }
                    });

                    lastParent = nodeInPath;
                    nodePath.push([path[i][0], nodeInPath]);
                }
            }

            nodePath.reverse();
            // Get the good resource depending if his parents
            let recommandationId :string = null;
            lastParent.getChildren().forEach((childId :string) => {
                let child :FrameworkNode = this.framework.getFrameworkNodes().get(childId);
                if (child.getName() === frameworkResourcesBD.get(path[0][1]).name) {
                    recommandationId = child.getId();
                }
            });

            this.addRecommandation(recommandationId, nodePath);        
        })

        return this.framework;
    }

    /**
     * Add a recommandation in the tree and give the information to his parents
     * @param frameworkTree
     * @param recommandation the node recommanded
     */
    private addRecommandation(resourceId :string, path :Array<[Relation, FrameworkNode]>) :void {
        let recommandationNode = this.framework.getFrameworkNodes().get(resourceId);
        this.framework.addRecommandedNode(recommandationNode, path);
        let parent :FrameworkNode = recommandationNode.getParent();
        while (parent !== undefined && parent !== null) {
            parent.setHasRecommandedChild(true);
            parent = parent.getParent();
        }    
    }

    /**
     * Return a new id
     */
    private generateId() :string {
        var result           = '';
        var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for ( var i = 0; i < 6; i++ ) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return Date.now()+result;
    }

    /**
     * Return the type of node corresponding to the string
     */
    private getTypeNode(type :string) :TypeNode {
        switch(type) {
            case ("Competency"):
                return TypeNode.competency;
            case ("Knowledge"):
                return TypeNode.knowledge;
            case ("Skills"):
                return TypeNode.skill;
            default:
                return TypeNode.resource;
        }
    }
}