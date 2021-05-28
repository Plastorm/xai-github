define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.isHierarchicalRelation = exports.getSymetricRelation = exports.TypeNode = exports.ClassNode = exports.Relation = exports.Framework = exports.FrameworkNode = void 0;
    /**
     * Node class which also contains percent of mastery and trust of the user
     */
    class FrameworkNode {
        constructor(id, name, parent, type, mastery, trust) {
            this.children = new Array();
            // Says if the node is the objectif, a recommandation or a basic node
            this.classNode = ClassNode.basic;
            // True if at least one of the child of the node (or child of his child) is recommanded
            this.hasRecommandedChild = false;
            this.id = id;
            this.name = name;
            this.parent = parent;
            this.type = type;
            this.mastery = mastery;
            this.trust = trust;
        }
        getId() {
            return this.id;
        }
        getName() {
            return this.name;
        }
        getType() {
            return this.type;
        }
        isRessource() {
            return (this.type === TypeNode.resource);
        }
        getClassNode() {
            return this.classNode;
        }
        setClassNode(classNode) {
            this.classNode = classNode;
        }
        getHasRecommandedChild() {
            return this.hasRecommandedChild;
        }
        getParent() {
            return this.parent;
        }
        getChildren() {
            return this.children;
        }
        getMastery() {
            return this.mastery || 0;
        }
        getTrust() {
            return this.trust || 0;
        }
        setHasRecommandedChild(hasRecommandedChild) {
            this.hasRecommandedChild = hasRecommandedChild;
        }
        addChild(idNode) {
            this.children.push(idNode);
        }
    }
    exports.FrameworkNode = FrameworkNode;
    /**
     * Framework class
     */
    class Framework {
        constructor(name) {
            // Map of recommanded nodes for the objectif (keys are id of nodes)
            this.recommandationsPath = new Map();
            // Map of nodes (keys are id of nodes)
            this.frameworkNodes = new Map();
            this.name = name;
        }
        getName() {
            return this.name;
        }
        getNodeById(id) {
            return this.frameworkNodes.get(id);
        }
        getRecommandationsPath() {
            return this.recommandationsPath;
        }
        getFrameworkNodes() {
            return this.frameworkNodes;
        }
        getObjectif() {
            return this.objectif;
        }
        setObjectif(objectif) {
            this.objectif = objectif;
            this.objectif.setClassNode(ClassNode.objectif);
        }
        addRecommandedNode(node, path) {
            this.recommandationsPath.set(node.getId(), path);
            node.setClassNode(ClassNode.recommandation);
        }
        addNode(node) {
            this.frameworkNodes.set(node.getId(), node);
        }
    }
    exports.Framework = Framework;
    /**
     * List of every possibles relations between nodes
     */
    var Relation;
    (function (Relation) {
        Relation[Relation["hasSkill"] = 0] = "hasSkill";
        Relation[Relation["isSkillOf"] = 1] = "isSkillOf";
        Relation[Relation["hasKnowledge"] = 2] = "hasKnowledge";
        Relation[Relation["isKnowledgeOf"] = 3] = "isKnowledgeOf";
        Relation[Relation["composes"] = 4] = "composes";
        Relation[Relation["isComposedOf"] = 5] = "isComposedOf";
        Relation[Relation["comprises"] = 6] = "comprises";
        Relation[Relation["isComprisedIn"] = 7] = "isComprisedIn";
        Relation[Relation["complexifies"] = 8] = "complexifies";
        Relation[Relation["isComplexificationOf"] = 9] = "isComplexificationOf";
        Relation[Relation["facilitatesUnderstandingOf"] = 10] = "facilitatesUnderstandingOf";
        Relation[Relation["isLeverOfUnderstandingOf"] = 11] = "isLeverOfUnderstandingOf";
        Relation[Relation["requires"] = 12] = "requires";
        Relation[Relation["isRequiredBy"] = 13] = "isRequiredBy";
        Relation[Relation["hasLearning"] = 14] = "hasLearning";
        Relation[Relation["isLearningOf"] = 15] = "isLearningOf";
        Relation[Relation["hasTraining"] = 16] = "hasTraining";
        Relation[Relation["isTrainingOf"] = 17] = "isTrainingOf";
    })(Relation = exports.Relation || (exports.Relation = {}));
    /**
     * List of possibles class of nodes
     */
    var ClassNode;
    (function (ClassNode) {
        ClassNode[ClassNode["objectif"] = 0] = "objectif";
        ClassNode[ClassNode["recommandation"] = 1] = "recommandation";
        ClassNode[ClassNode["basic"] = 2] = "basic";
    })(ClassNode = exports.ClassNode || (exports.ClassNode = {}));
    /**
     * List of possibles types of nodes
     */
    var TypeNode;
    (function (TypeNode) {
        TypeNode[TypeNode["skill"] = 0] = "skill";
        TypeNode[TypeNode["knowledge"] = 1] = "knowledge";
        TypeNode[TypeNode["competency"] = 2] = "competency";
        TypeNode[TypeNode["resource"] = 3] = "resource";
    })(TypeNode = exports.TypeNode || (exports.TypeNode = {}));
    /**
     * Get the symetric of a relation
     * @param relation the relation that we search the symetric
     * @returns the symetric relation
     */
    function getSymetricRelation(relation) {
        switch (relation) {
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
    exports.getSymetricRelation = getSymetricRelation;
    /**
     * Return true if the relation is hirarchical
     * @param relation
     * @returns true if the relation is hirarchical
     */
    function isHierarchicalRelation(relation) {
        switch (relation) {
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
                return false;
            default:
                return false;
        }
    }
    exports.isHierarchicalRelation = isHierarchicalRelation;
});
