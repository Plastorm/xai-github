/**
 * Node class which also contains percent of mastery and trust of the user
 */
export class FrameworkNode {
    
    private id :string;
    
    private name :string;

    private parent :FrameworkNode;

    private children :Array<string> = new Array<string>();

    // The type of the node
    private type :TypeNode;

    // Says if the node is the objectif, a recommandation or a basic node
    private classNode :ClassNode = ClassNode.basic;

    // True if at least one of the child of the node (or child of his child) is recommanded
    private hasRecommandedChild :Boolean = false;

    // Current data of the user for this node (between 0 and 1)
    private mastery :number;
    private trust   :number;

    constructor(id :string, name :string, parent :FrameworkNode, type :TypeNode, mastery :number, trust :number) {
        this.id = id;
        this.name = name;
        this.parent = parent;
        this.type = type;
        this.mastery = mastery;
        this.trust = trust;
    }

    public getId() :string {
        return this.id;
    }

    public getName() :string {
        return this.name;
    }

    public getType() :TypeNode {
        return this.type;
    }

    public isRessource() :Boolean {
        return (this.type === TypeNode.resource);
    }

    public getClassNode() :ClassNode {
        return this.classNode;
    }

    public setClassNode(classNode :ClassNode) {
        this.classNode = classNode;
    }

    public getHasRecommandedChild() :Boolean {
        return this.hasRecommandedChild;
    }

    public getParent() :FrameworkNode {
        return this.parent;
    }

    public getChildren() :Array<string> {
        return this.children;
    }

    public getMastery() :number {
        return this.mastery || 0;
    }

    public getTrust() :number {
        return this.trust || 0;
    }

    public setHasRecommandedChild(hasRecommandedChild :Boolean) :void {
        this.hasRecommandedChild = hasRecommandedChild;
    }

    public addChild(idNode : string) :void {
        this.children.push(idNode);
    }
}


/**
 * Framework class
 */
export class Framework {
    
    // Name of the Framework
    private name :string;

    // The objectif of the Framework studied in this view
    private objectif :FrameworkNode;

    // Map of recommanded nodes for the objectif (keys are id of nodes)
    private recommandationsPath :Map<string, Array<[Relation, FrameworkNode]>> = new Map<string, Array<[Relation, FrameworkNode]>>();

    // Map of nodes (keys are id of nodes)
    private frameworkNodes :Map<string, FrameworkNode> = new Map<string, FrameworkNode>();

    constructor(name :string) {
        this.name = name;
    }

    public getName() :string {
        return this.name;
    }

    public getNodeById(id :string) :FrameworkNode {
        return this.frameworkNodes.get(id);
    }

    public getRecommandationsPath() :Map<string, Array<[Relation, FrameworkNode]>> {
        return this.recommandationsPath;
    }

    public getFrameworkNodes() :Map<string, FrameworkNode> {
        return this.frameworkNodes;
    }

    public getObjectif() :FrameworkNode {
        return this.objectif;
    }

    public setObjectif(objectif :FrameworkNode) :void {
        this.objectif = objectif;
        this.objectif.setClassNode(ClassNode.objectif);
    }

    public addRecommandedNode(node : FrameworkNode, path :Array<[Relation, FrameworkNode]>) :void {
        this.recommandationsPath.set(node.getId(), path);
        node.setClassNode(ClassNode.recommandation);
    }

    public addNode(node : FrameworkNode) :void {
        this.frameworkNodes.set(node.getId(), node);
    }
}


/**
 * List of every possibles relations between nodes
 */
export enum Relation {
    hasSkill,
    isSkillOf,
    hasKnowledge, 
    isKnowledgeOf, 
    composes,
    isComposedOf,
    comprises,
    isComprisedIn,
    complexifies,
    isComplexificationOf,
    facilitatesUnderstandingOf,
    isLeverOfUnderstandingOf,
    requires,
    isRequiredBy,
    hasLearning,
    isLearningOf,
    hasTraining,
    isTrainingOf,
}

/**
 * List of possibles class of nodes
 */
export enum ClassNode {
    objectif,
    recommandation,
    basic
}

/**
 * List of possibles types of nodes
 */
export enum TypeNode {
    skill,
    knowledge,
    competency,
    resource
}

/**
 * Get the symetric of a relation
 * @param relation the relation that we search the symetric
 * @returns the symetric relation
 */
export function getSymetricRelation(relation :Relation) :Relation {
    switch(relation) {
        case (Relation.hasSkill):
            return Relation.isSkillOf;
        case (Relation.isSkillOf):
            return Relation.hasSkill;

        case (Relation.hasKnowledge):
            return Relation.isKnowledgeOf;
        case (Relation.isKnowledgeOf):
            return Relation.hasKnowledge;
            
        case (Relation.composes):
            return Relation.isComposedOf;
        case (Relation.isComposedOf):
            return Relation.composes;
            
        case (Relation.comprises):
            return Relation.isComprisedIn;
        case (Relation.isComprisedIn):
            return Relation.comprises;
            
        case (Relation.complexifies):
            return Relation.isComplexificationOf;
        case (Relation.isComplexificationOf):
            return Relation.complexifies;
            
        case (Relation.facilitatesUnderstandingOf):
            return Relation.isLeverOfUnderstandingOf;
        case (Relation.isLeverOfUnderstandingOf):
            return Relation.facilitatesUnderstandingOf;
            
        case (Relation.requires):
            return Relation.isRequiredBy;
        case (Relation.isRequiredBy):
            return Relation.requires;
            
        case (Relation.hasLearning):
            return Relation.isLearningOf;
        case (Relation.isLearningOf):
            return Relation.hasLearning;
        
        case (Relation.hasTraining):
            return Relation.isTrainingOf;
        case (Relation.isTrainingOf):
            return Relation.hasTraining;
            
        default:
            return relation;
    }
}

/**
 * Return true if the relation is hirarchical
 * @param relation
 * @returns true if the relation is hirarchical
 */
export function isHierarchicalRelation(relation :Relation) :boolean {
    switch(relation) {
        case (Relation.hasSkill):
        case (Relation.isSkillOf):
        case (Relation.hasKnowledge):
        case (Relation.isKnowledgeOf):
        case (Relation.composes):
        case (Relation.isComposedOf):
        case (Relation.comprises):
        case (Relation.isComprisedIn):
        case (Relation.hasLearning):
        case (Relation.isLearningOf):
        case (Relation.hasTraining):
        case (Relation.isTrainingOf):
            return true;
            
        case (Relation.complexifies):
        case (Relation.isComplexificationOf):
        case (Relation.facilitatesUnderstandingOf):
        case (Relation.isLeverOfUnderstandingOf):
        case (Relation.requires):
        case (Relation.isRequiredBy):
            return false

        default:
            return false;
    }
}