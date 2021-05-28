define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getFrameworkSample = void 0;
    /**
     * @returns a test framework from real application.
     */
    function getFrameworkSample() {
        let profil = {
            "name": "Programmer_en_langage_Shell_V16112020",
            "objects": [
                {
                    "name": "Afficher_la_valeur_dune_variable",
                    "type": "Skills",
                    "mastery": 0.8,
                    "trust": 1,
                    "cover": 1,
                    "relations": {
                        "isSkillOf": [
                            "Manipuler_des_variables"
                        ],
                        "isKnowledgeOf": [],
                        "composes": [],
                        "hasSkill": [],
                        "hasKnowledge": [],
                        "isComposedOf": [],
                        "requires": [
                            "Obtenir_la_valeur_affectée_à_une_variable",
                            "Connaître_la_notion_de_variable"
                        ],
                        "hasLearning": [],
                        "hasTraining": [
                            "asker:742",
                            "asker:743",
                            "asker:744"
                        ]
                    }
                },
                {
                    "name": "Affecter_une_valeur_à_un_ou_plusieurs_paramètres_de_position",
                    "type": "Skills",
                    "mastery": 0.6,
                    "trust": 1,
                    "cover": 1,
                    "relations": {
                        "isSkillOf": [
                            "Manipuler_des_variables"
                        ],
                        "isKnowledgeOf": [],
                        "composes": [],
                        "hasSkill": [],
                        "hasKnowledge": [],
                        "isComposedOf": [],
                        "requires": [
                            "Connaître_la_notion_de_variable"
                        ],
                        "hasLearning": [],
                        "hasTraining": []
                    }
                },
                {
                    "name": "Modifier_la_valeur_de_une_variable",
                    "type": "Skills",
                    "mastery": 0.8,
                    "trust": 1,
                    "cover": 1,
                    "relations": {
                        "isSkillOf": [
                            "Manipuler_des_variables"
                        ],
                        "isKnowledgeOf": [],
                        "composes": [],
                        "hasSkill": [],
                        "hasKnowledge": [],
                        "isComposedOf": [],
                        "requires": [
                            "Affecter_une_valeur_à_une_variable"
                        ],
                        "hasLearning": [],
                        "hasTraining": [
                            "asker:736",
                            "asker:749",
                            "asker:716"
                        ]
                    }
                },
                {
                    "name": "Renommer_un_fichier_Unix",
                    "type": "Skills",
                    "mastery": 0,
                    "trust": 0,
                    "cover": 0,
                    "relations": {
                        "isSkillOf": [
                            "Manipuler_des_fichiers_Unix"
                        ],
                        "isKnowledgeOf": [],
                        "composes": [],
                        "hasSkill": [],
                        "hasKnowledge": [],
                        "isComposedOf": [],
                        "requires": [
                            "Connaître_la_notion_de_fichier_Unix"
                        ],
                        "hasLearning": [],
                        "hasTraining": [
                            "asker:762"
                        ]
                    }
                },
                {
                    "name": "Affecter_une_valeur_à_une_variable",
                    "type": "Skills",
                    "mastery": 0.8,
                    "trust": 1,
                    "cover": 1,
                    "relations": {
                        "isSkillOf": [
                            "Manipuler_des_variables"
                        ],
                        "isKnowledgeOf": [],
                        "composes": [],
                        "hasSkill": [],
                        "hasKnowledge": [],
                        "isComposedOf": [],
                        "requires": [
                            "Connaître_la_notion_de_variable"
                        ],
                        "hasLearning": [],
                        "hasTraining": [
                            "asker:736",
                            "asker:749",
                            "asker:716"
                        ]
                    }
                },
                {
                    "name": "Tester_létat_dun_fichier",
                    "type": "Skills",
                    "mastery": 0.6,
                    "trust": 1,
                    "cover": 1,
                    "relations": {
                        "isSkillOf": [
                            "Réaliser_des_tests_conditionnels"
                        ],
                        "isKnowledgeOf": [],
                        "composes": [],
                        "hasSkill": [],
                        "hasKnowledge": [],
                        "isComposedOf": [],
                        "requires": [
                            "Connaître_les_tests_détat_de_fichier"
                        ],
                        "hasLearning": [],
                        "hasTraining": []
                    }
                },
                {
                    "name": "Créer_un_fichier_Unix",
                    "type": "Skills",
                    "mastery": 0.8000000000000002,
                    "trust": 1,
                    "cover": 1,
                    "relations": {
                        "isSkillOf": [
                            "Manipuler_des_fichiers_Unix"
                        ],
                        "isKnowledgeOf": [],
                        "composes": [],
                        "hasSkill": [],
                        "hasKnowledge": [],
                        "isComposedOf": [],
                        "requires": [
                            "Connaître_la_notion_de_fichier_Unix"
                        ],
                        "hasLearning": [],
                        "hasTraining": [
                            "asker:739",
                            "asker:741"
                        ]
                    }
                },
                {
                    "name": "Afficher_le_manuel_dune_commande_Unix",
                    "type": "Skills",
                    "mastery": 0,
                    "trust": 0,
                    "cover": 0,
                    "relations": {
                        "isSkillOf": [
                            "Exécuter_des_commandes_Unix"
                        ],
                        "isKnowledgeOf": [],
                        "composes": [],
                        "hasSkill": [],
                        "hasKnowledge": [],
                        "isComposedOf": [],
                        "requires": [],
                        "hasLearning": [],
                        "hasTraining": []
                    }
                },
                {
                    "name": "Modifier_les_droits_dun_fichier_Unix",
                    "type": "Skills",
                    "mastery": 0.8000000000000002,
                    "trust": 1,
                    "cover": 1,
                    "relations": {
                        "isSkillOf": [
                            "Manipuler_des_fichiers_Unix"
                        ],
                        "isKnowledgeOf": [],
                        "composes": [],
                        "hasSkill": [],
                        "hasKnowledge": [],
                        "isComposedOf": [],
                        "requires": [
                            "Connaître_la_notion_de_fichier_Unix",
                            "Connaître_la_notion_de_droits_sous_Unix"
                        ],
                        "hasLearning": [],
                        "hasTraining": [
                            "asker:738",
                            "asker:733",
                            "asker:734"
                        ]
                    }
                },
                {
                    "name": "Afficher_le_contenu_de_un_fichier_Unix",
                    "type": "Skills",
                    "mastery": 0.8,
                    "trust": 1,
                    "cover": 1,
                    "relations": {
                        "isSkillOf": [
                            "Manipuler_des_fichiers_Unix"
                        ],
                        "isKnowledgeOf": [],
                        "composes": [],
                        "hasSkill": [],
                        "hasKnowledge": [],
                        "isComposedOf": [],
                        "requires": [
                            "Connaître_la_notion_de_fichier_Unix"
                        ],
                        "hasLearning": [],
                        "hasTraining": []
                    }
                },
                {
                    "name": "Modifier_un_fichier_Unix",
                    "type": "Skills",
                    "mastery": 0,
                    "trust": 0,
                    "cover": 0,
                    "relations": {
                        "isSkillOf": [
                            "Manipuler_des_fichiers_Unix"
                        ],
                        "isKnowledgeOf": [],
                        "composes": [],
                        "hasSkill": [],
                        "hasKnowledge": [],
                        "isComposedOf": [],
                        "requires": [
                            "Connaître_la_notion_de_fichier_Unix"
                        ],
                        "hasLearning": [],
                        "hasTraining": []
                    }
                },
                {
                    "name": "Obtenir_la_valeur_affectée_à_une_variable",
                    "type": "Skills",
                    "mastery": 0.8,
                    "trust": 1,
                    "cover": 1,
                    "relations": {
                        "isSkillOf": [
                            "Manipuler_des_variables"
                        ],
                        "isKnowledgeOf": [],
                        "composes": [],
                        "hasSkill": [],
                        "hasKnowledge": [],
                        "isComposedOf": [],
                        "requires": [
                            "Connaître_la_notion_de_variable"
                        ],
                        "hasLearning": [],
                        "hasTraining": [
                            "asker:748",
                            "asker:742",
                            "asker:743",
                            "asker:735"
                        ]
                    }
                },
                {
                    "name": "Comparer_des_nombres",
                    "type": "Skills",
                    "mastery": 0.8,
                    "trust": 1,
                    "cover": 1,
                    "relations": {
                        "isSkillOf": [
                            "Réaliser_des_tests_conditionnels"
                        ],
                        "isKnowledgeOf": [],
                        "composes": [],
                        "hasSkill": [],
                        "hasKnowledge": [],
                        "isComposedOf": [],
                        "requires": [
                            "Connaître_les_opérateurs_de_comparaison_numérique"
                        ],
                        "hasLearning": [],
                        "hasTraining": []
                    }
                },
                {
                    "name": "Récupérer_des_données_saisies_par_lutilisateur",
                    "type": "Skills",
                    "mastery": 0.8,
                    "trust": 1,
                    "cover": 1,
                    "relations": {
                        "isSkillOf": [
                            "Ecrire_des_scripts_interactifs"
                        ],
                        "isKnowledgeOf": [],
                        "composes": [],
                        "hasSkill": [],
                        "hasKnowledge": [],
                        "isComposedOf": [],
                        "requires": [],
                        "hasLearning": [],
                        "hasTraining": [
                            "asker:758",
                            "asker:759",
                            "asker:761",
                            "asker:756"
                        ]
                    }
                },
                {
                    "name": "Obtenir_la_valeur_de_un_ou_plusieurs_paramètres",
                    "type": "Skills",
                    "mastery": 0.8,
                    "trust": 1,
                    "cover": 1,
                    "relations": {
                        "isSkillOf": [
                            "Manipuler_les_paramètres_dun_script"
                        ],
                        "isKnowledgeOf": [],
                        "composes": [],
                        "hasSkill": [],
                        "hasKnowledge": [],
                        "isComposedOf": [],
                        "requires": [
                            "Connaître_la_notion_de_paramètre"
                        ],
                        "hasLearning": [],
                        "hasTraining": [
                            "asker:751",
                            "asker:744",
                            "asker:745"
                        ]
                    }
                },
                {
                    "name": "Banaliser_un_caractère",
                    "type": "Skills",
                    "mastery": 0.8,
                    "trust": 1,
                    "cover": 1,
                    "relations": {
                        "isSkillOf": [
                            "Substituer_une_commande_par_son_exécution"
                        ],
                        "isKnowledgeOf": [],
                        "composes": [],
                        "hasSkill": [],
                        "hasKnowledge": [],
                        "isComposedOf": [],
                        "requires": [
                            "Connaître_la_notion_de_banalisation_de_caractères"
                        ],
                        "hasLearning": [],
                        "hasTraining": [
                            "asker:747",
                            "asker:748",
                            "asker:746"
                        ]
                    }
                },
                {
                    "name": "Comparer_des_chaînes_de_caractères",
                    "type": "Skills",
                    "mastery": 0.6,
                    "trust": 1,
                    "cover": 1,
                    "relations": {
                        "isSkillOf": [
                            "Réaliser_des_tests_conditionnels"
                        ],
                        "isKnowledgeOf": [],
                        "composes": [],
                        "hasSkill": [],
                        "hasKnowledge": [],
                        "isComposedOf": [],
                        "requires": [
                            "Connaître_les_opérateurs_de_comparaison_de_caractères"
                        ],
                        "hasLearning": [],
                        "hasTraining": []
                    }
                },
                {
                    "name": "Supprimer_un_fichier_Unix",
                    "type": "Skills",
                    "mastery": 0,
                    "trust": 0,
                    "cover": 0,
                    "relations": {
                        "isSkillOf": [
                            "Manipuler_des_fichiers_Unix"
                        ],
                        "isKnowledgeOf": [],
                        "composes": [],
                        "hasSkill": [],
                        "hasKnowledge": [],
                        "isComposedOf": [],
                        "requires": [
                            "Connaître_la_notion_de_fichier_Unix"
                        ],
                        "hasLearning": [],
                        "hasTraining": [
                            "asker:760"
                        ]
                    }
                },
                {
                    "name": "Interpréter_de_façon_numérique_la_valeur_dune_variable",
                    "type": "Skills",
                    "mastery": 0.8,
                    "trust": 1,
                    "cover": 1,
                    "relations": {
                        "isSkillOf": [
                            "Manipuler_des_variables"
                        ],
                        "isKnowledgeOf": [],
                        "composes": [],
                        "hasSkill": [],
                        "hasKnowledge": [],
                        "isComposedOf": [],
                        "requires": [
                            "Connaître_la_notion_de_variable"
                        ],
                        "hasLearning": [],
                        "hasTraining": [
                            "asker:754",
                            "asker:755",
                            "asker:756"
                        ]
                    }
                },
                {
                    "name": "Connaître_les_opérateurs_de_comparaison_numérique",
                    "type": "Knowledge",
                    "mastery": 0.8,
                    "trust": 1,
                    "cover": 1,
                    "relations": {
                        "isSkillOf": [],
                        "isKnowledgeOf": [
                            "Réaliser_des_tests_conditionnels"
                        ],
                        "composes": [],
                        "hasSkill": [],
                        "hasKnowledge": [],
                        "isComposedOf": [],
                        "requires": [],
                        "hasLearning": [],
                        "hasTraining": []
                    }
                },
                {
                    "name": "Connaître_la_notion_de_redirection_entrée_et_sortie",
                    "type": "Knowledge",
                    "mastery": 0.6,
                    "trust": 1,
                    "cover": 1,
                    "relations": {
                        "isSkillOf": [],
                        "isKnowledgeOf": [
                            "Manipuler_des_fichiers_Unix"
                        ],
                        "composes": [],
                        "hasSkill": [],
                        "hasKnowledge": [],
                        "isComposedOf": [],
                        "requires": [],
                        "hasLearning": [
                            "webtraffic:shellesunix"
                        ],
                        "hasTraining": []
                    }
                },
                {
                    "name": "Connaître_les_commandes_de_base_Unix",
                    "type": "Knowledge",
                    "mastery": 0,
                    "trust": 0,
                    "cover": 0,
                    "relations": {
                        "isSkillOf": [],
                        "isKnowledgeOf": [
                            "Exécuter_des_commandes_Unix"
                        ],
                        "composes": [],
                        "hasSkill": [],
                        "hasKnowledge": [],
                        "isComposedOf": [],
                        "requires": [],
                        "hasLearning": [
                            "webtraffic:shellcmdbasefichiers",
                            "webtraffic:shellcmdnano",
                            "webtraffic:shellcmdtouch"
                        ],
                        "hasTraining": [
                            "asker:757"
                        ]
                    }
                },
                {
                    "name": "Connaître_la_syntaxe_dollar(cmd)",
                    "type": "Knowledge",
                    "mastery": 0.8,
                    "trust": 1,
                    "cover": 1,
                    "relations": {
                        "isSkillOf": [],
                        "isKnowledgeOf": [
                            "Substituer_une_commande_par_son_exécution"
                        ],
                        "composes": [],
                        "hasSkill": [],
                        "hasKnowledge": [],
                        "isComposedOf": [],
                        "requires": [],
                        "hasLearning": [],
                        "hasTraining": []
                    }
                },
                {
                    "name": "Connaître_la_notion_de_droits_sous_Unix",
                    "type": "Knowledge",
                    "mastery": 0.8,
                    "trust": 1,
                    "cover": 1,
                    "relations": {
                        "isSkillOf": [],
                        "isKnowledgeOf": [
                            "Manipuler_des_fichiers_Unix"
                        ],
                        "composes": [],
                        "hasSkill": [],
                        "hasKnowledge": [],
                        "isComposedOf": [],
                        "requires": [],
                        "hasLearning": [
                            "webtraffic:shelldroitsunix"
                        ],
                        "hasTraining": []
                    }
                },
                {
                    "name": "Connaître_la_notion_de_banalisation_de_caractères",
                    "type": "Knowledge",
                    "mastery": 0.8,
                    "trust": 1,
                    "cover": 1,
                    "relations": {
                        "isSkillOf": [],
                        "isKnowledgeOf": [
                            "Substituer_une_commande_par_son_exécution"
                        ],
                        "composes": [],
                        "hasSkill": [],
                        "hasKnowledge": [],
                        "isComposedOf": [],
                        "requires": [],
                        "hasLearning": [
                            "webtraffic:shellbanalisationchar"
                        ],
                        "hasTraining": []
                    }
                },
                {
                    "name": "Connaître_les_variables_denvironnement",
                    "type": "Knowledge",
                    "mastery": 0.6,
                    "trust": 1,
                    "cover": 1,
                    "relations": {
                        "isSkillOf": [],
                        "isKnowledgeOf": [
                            "Manipuler_des_variables"
                        ],
                        "composes": [],
                        "hasSkill": [],
                        "hasKnowledge": [],
                        "isComposedOf": [],
                        "requires": [],
                        "hasLearning": [
                            "webtraffic:shellvariablesenv",
                            "asker:752",
                            "asker:756"
                        ],
                        "hasTraining": []
                    }
                },
                {
                    "name": "Connaître_la_syntaxe_de_instruction_case",
                    "type": "Knowledge",
                    "mastery": 0.8,
                    "trust": 1,
                    "cover": 1,
                    "relations": {
                        "isSkillOf": [],
                        "isKnowledgeOf": [
                            "Exécuter_de_manière_sélective_des_commandes"
                        ],
                        "composes": [],
                        "hasSkill": [],
                        "hasKnowledge": [],
                        "isComposedOf": [],
                        "requires": [],
                        "hasLearning": [],
                        "hasTraining": []
                    }
                },
                {
                    "name": "Connaître_la_syntaxe_de_instruction_seq",
                    "type": "Knowledge",
                    "mastery": 0,
                    "trust": 0,
                    "cover": 0,
                    "relations": {
                        "isSkillOf": [],
                        "isKnowledgeOf": [
                            "Générer_une_séquence_de_nombres"
                        ],
                        "composes": [],
                        "hasSkill": [],
                        "hasKnowledge": [],
                        "isComposedOf": [],
                        "requires": [],
                        "hasLearning": [],
                        "hasTraining": []
                    }
                },
                {
                    "name": "Connaître_le_caractère_de_substitution_de_commande",
                    "type": "Knowledge",
                    "mastery": 0.8,
                    "trust": 1,
                    "cover": 1,
                    "relations": {
                        "isSkillOf": [],
                        "isKnowledgeOf": [
                            "Substituer_une_commande_par_son_exécution"
                        ],
                        "composes": [],
                        "hasSkill": [],
                        "hasKnowledge": [],
                        "isComposedOf": [],
                        "requires": [],
                        "hasLearning": [],
                        "hasTraining": [
                            "asker:749",
                            "asker:754",
                            "asker:755"
                        ]
                    }
                },
                {
                    "name": "Connaître_la_syntaxe_IfThenElifElse",
                    "type": "Knowledge",
                    "mastery": 0,
                    "trust": 0,
                    "cover": 0,
                    "relations": {
                        "isSkillOf": [],
                        "isKnowledgeOf": [
                            "Réaliser_des_tests_conditionnels"
                        ],
                        "composes": [],
                        "hasSkill": [],
                        "hasKnowledge": [],
                        "isComposedOf": [],
                        "requires": [],
                        "hasLearning": [],
                        "hasTraining": []
                    }
                },
                {
                    "name": "Connaître_la_syntaxe_de_instruction_set",
                    "type": "Knowledge",
                    "mastery": 0.6,
                    "trust": 1,
                    "cover": 1,
                    "relations": {
                        "isSkillOf": [],
                        "isKnowledgeOf": [
                            "Manipuler_des_variables"
                        ],
                        "composes": [],
                        "hasSkill": [],
                        "hasKnowledge": [],
                        "isComposedOf": [],
                        "requires": [],
                        "hasLearning": [],
                        "hasTraining": []
                    }
                },
                {
                    "name": "Connaître_la_notion_de_variable",
                    "type": "Knowledge",
                    "mastery": 0.8000000000000002,
                    "trust": 1,
                    "cover": 1,
                    "relations": {
                        "isSkillOf": [],
                        "isKnowledgeOf": [
                            "Manipuler_des_variables"
                        ],
                        "composes": [],
                        "hasSkill": [],
                        "hasKnowledge": [],
                        "isComposedOf": [],
                        "requires": [],
                        "hasLearning": [
                            "webtraffic:shellobtentionaffectation",
                            "webtraffic:shellnotionvariable",
                            "webtraffic:shellaffectation"
                        ],
                        "hasTraining": []
                    }
                },
                {
                    "name": "Connaître_la_syntaxe_de_instruction_while",
                    "type": "Knowledge",
                    "mastery": 0.8,
                    "trust": 1,
                    "cover": 1,
                    "relations": {
                        "isSkillOf": [],
                        "isKnowledgeOf": [
                            "Répéter_des_instructions"
                        ],
                        "composes": [],
                        "hasSkill": [],
                        "hasKnowledge": [],
                        "isComposedOf": [],
                        "requires": [],
                        "hasLearning": [],
                        "hasTraining": []
                    }
                },
                {
                    "name": "Connaître_la_notion_de_paramètre",
                    "type": "Knowledge",
                    "mastery": 0.8,
                    "trust": 1,
                    "cover": 1,
                    "relations": {
                        "isSkillOf": [],
                        "isKnowledgeOf": [
                            "Manipuler_les_paramètres_dun_script"
                        ],
                        "composes": [],
                        "hasSkill": [],
                        "hasKnowledge": [],
                        "isComposedOf": [],
                        "requires": [],
                        "hasLearning": [
                            "webtraffic:shellarguments"
                        ],
                        "hasTraining": [
                            "asker:751"
                        ]
                    }
                },
                {
                    "name": "Connaître_la_syntaxe_dollar((__))",
                    "type": "Knowledge",
                    "mastery": 0.8,
                    "trust": 1,
                    "cover": 1,
                    "relations": {
                        "isSkillOf": [],
                        "isKnowledgeOf": [
                            "Réaliser_des_calculs_arithmétiques"
                        ],
                        "composes": [],
                        "hasSkill": [],
                        "hasKnowledge": [],
                        "isComposedOf": [],
                        "requires": [],
                        "hasLearning": [],
                        "hasTraining": []
                    }
                },
                {
                    "name": "Connaître_les_opérateurs_de_comparaison_de_caractères",
                    "type": "Knowledge",
                    "mastery": 0.4,
                    "trust": 1,
                    "cover": 1,
                    "relations": {
                        "isSkillOf": [],
                        "isKnowledgeOf": [
                            "Réaliser_des_tests_conditionnels"
                        ],
                        "composes": [],
                        "hasSkill": [],
                        "hasKnowledge": [],
                        "isComposedOf": [],
                        "requires": [],
                        "hasLearning": [],
                        "hasTraining": []
                    }
                },
                {
                    "name": "Connaître_la_notion_de_fichier_Unix",
                    "type": "Knowledge",
                    "mastery": 0.8000000000000002,
                    "trust": 1,
                    "cover": 1,
                    "relations": {
                        "isSkillOf": [],
                        "isKnowledgeOf": [
                            "Manipuler_des_fichiers_Unix"
                        ],
                        "composes": [],
                        "hasSkill": [],
                        "hasKnowledge": [],
                        "isComposedOf": [],
                        "requires": [],
                        "hasLearning": [
                            "webtraffic:shellnotionfichier"
                        ],
                        "hasTraining": []
                    }
                },
                {
                    "name": "Connaître_la_syntaxe_CrochetCrochet",
                    "type": "Knowledge",
                    "mastery": 0.8,
                    "trust": 1,
                    "cover": 1,
                    "relations": {
                        "isSkillOf": [],
                        "isKnowledgeOf": [
                            "Réaliser_des_tests_conditionnels"
                        ],
                        "composes": [],
                        "hasSkill": [],
                        "hasKnowledge": [],
                        "isComposedOf": [],
                        "requires": [],
                        "hasLearning": [],
                        "hasTraining": []
                    }
                },
                {
                    "name": "Connaître_les_variables_spéciales",
                    "type": "Knowledge",
                    "mastery": 0.8,
                    "trust": 1,
                    "cover": 1,
                    "relations": {
                        "isSkillOf": [],
                        "isKnowledgeOf": [
                            "Manipuler_les_paramètres_dun_script",
                            "Manipuler_des_variables"
                        ],
                        "composes": [],
                        "hasSkill": [],
                        "hasKnowledge": [],
                        "isComposedOf": [],
                        "requires": [],
                        "hasLearning": [
                            "asker:745",
                            "webtraffic:shellvariablesspeciales"
                        ],
                        "hasTraining": [
                            "asker:750",
                            "asker:751"
                        ]
                    }
                },
                {
                    "name": "Connaître_la_syntaxe_de_instruction_for",
                    "type": "Knowledge",
                    "mastery": 0.8,
                    "trust": 1,
                    "cover": 1,
                    "relations": {
                        "isSkillOf": [],
                        "isKnowledgeOf": [
                            "Répéter_des_instructions"
                        ],
                        "composes": [],
                        "hasSkill": [],
                        "hasKnowledge": [],
                        "isComposedOf": [],
                        "requires": [],
                        "hasLearning": [],
                        "hasTraining": []
                    }
                },
                {
                    "name": "Connaître_la_notion_de_expression_arithmétique",
                    "type": "Knowledge",
                    "mastery": 0.8,
                    "trust": 1,
                    "cover": 1,
                    "relations": {
                        "isSkillOf": [],
                        "isKnowledgeOf": [
                            "Réaliser_des_calculs_arithmétiques"
                        ],
                        "composes": [],
                        "hasSkill": [],
                        "hasKnowledge": [],
                        "isComposedOf": [],
                        "requires": [
                            "Banaliser_un_caractère"
                        ],
                        "hasLearning": [
                            "webtraffic:shellexpressionarithmetique"
                        ],
                        "hasTraining": [
                            "asker:754",
                            "asker:755"
                        ]
                    }
                },
                {
                    "name": "Connaître_les_opérateurs_logiques",
                    "type": "Knowledge",
                    "mastery": 0.8,
                    "trust": 1,
                    "cover": 1,
                    "relations": {
                        "isSkillOf": [],
                        "isKnowledgeOf": [
                            "Réaliser_des_tests_conditionnels"
                        ],
                        "composes": [],
                        "hasSkill": [],
                        "hasKnowledge": [],
                        "isComposedOf": [],
                        "requires": [],
                        "hasLearning": [],
                        "hasTraining": []
                    }
                },
                {
                    "name": "Connaître_les_tests_détat_de_fichier",
                    "type": "Knowledge",
                    "mastery": 0.6,
                    "trust": 1,
                    "cover": 1,
                    "relations": {
                        "isSkillOf": [],
                        "isKnowledgeOf": [
                            "Réaliser_des_tests_conditionnels"
                        ],
                        "composes": [],
                        "hasSkill": [],
                        "hasKnowledge": [],
                        "isComposedOf": [],
                        "requires": [
                            "Connaître_la_notion_de_fichier_Unix",
                            "Connaître_la_notion_de_droits_sous_Unix"
                        ],
                        "hasLearning": [],
                        "hasTraining": []
                    }
                },
                {
                    "name": "Exécuter_des_commandes_Unix",
                    "type": "Competency",
                    "mastery": 0,
                    "trust": 0,
                    "cover": 0,
                    "relations": {
                        "isSkillOf": [],
                        "isKnowledgeOf": [],
                        "composes": [],
                        "hasSkill": [
                            "Afficher_le_manuel_dune_commande_Unix"
                        ],
                        "hasKnowledge": [
                            "Connaître_les_commandes_de_base_Unix"
                        ],
                        "isComposedOf": [],
                        "requires": [],
                        "hasLearning": [],
                        "hasTraining": []
                    }
                },
                {
                    "name": "Manipuler_des_fichiers_Unix",
                    "type": "Competency",
                    "mastery": 0.8,
                    "trust": 1,
                    "cover": 1,
                    "relations": {
                        "isSkillOf": [],
                        "isKnowledgeOf": [],
                        "composes": [],
                        "hasSkill": [
                            "Modifier_les_droits_dun_fichier_Unix",
                            "Afficher_le_contenu_de_un_fichier_Unix",
                            "Modifier_un_fichier_Unix",
                            "Renommer_un_fichier_Unix",
                            "Supprimer_un_fichier_Unix",
                            "Créer_un_fichier_Unix"
                        ],
                        "hasKnowledge": [
                            "Connaître_la_notion_de_fichier_Unix",
                            "Connaître_la_notion_de_redirection_entrée_et_sortie",
                            "Connaître_la_notion_de_droits_sous_Unix"
                        ],
                        "isComposedOf": [],
                        "requires": [
                            "Exécuter_des_commandes_Unix"
                        ],
                        "hasLearning": [],
                        "hasTraining": []
                    }
                },
                {
                    "name": "Manipuler_les_paramètres_dun_script",
                    "type": "Competency",
                    "mastery": 0.8000000000000002,
                    "trust": 1,
                    "cover": 1,
                    "relations": {
                        "isSkillOf": [],
                        "isKnowledgeOf": [],
                        "composes": [],
                        "hasSkill": [
                            "Obtenir_la_valeur_de_un_ou_plusieurs_paramètres"
                        ],
                        "hasKnowledge": [
                            "Connaître_la_notion_de_paramètre",
                            "Connaître_les_variables_spéciales"
                        ],
                        "isComposedOf": [],
                        "requires": [],
                        "hasLearning": [],
                        "hasTraining": []
                    }
                },
                {
                    "name": "Manipuler_des_variables",
                    "type": "Competency",
                    "mastery": 0.7399999999999999,
                    "trust": 1,
                    "cover": 1,
                    "relations": {
                        "isSkillOf": [],
                        "isKnowledgeOf": [],
                        "composes": [],
                        "hasSkill": [
                            "Afficher_la_valeur_dune_variable",
                            "Obtenir_la_valeur_affectée_à_une_variable",
                            "Affecter_une_valeur_à_un_ou_plusieurs_paramètres_de_position",
                            "Modifier_la_valeur_de_une_variable",
                            "Interpréter_de_façon_numérique_la_valeur_dune_variable",
                            "Affecter_une_valeur_à_une_variable"
                        ],
                        "hasKnowledge": [
                            "Connaître_les_variables_spéciales",
                            "Connaître_les_variables_denvironnement",
                            "Connaître_la_notion_de_variable",
                            "Connaître_la_syntaxe_de_instruction_set"
                        ],
                        "isComposedOf": [],
                        "requires": [],
                        "hasLearning": [],
                        "hasTraining": []
                    }
                },
                {
                    "name": "Ecrire_des_scripts_interactifs",
                    "type": "Competency",
                    "mastery": 0.20000000000000004,
                    "trust": 1,
                    "cover": 1,
                    "relations": {
                        "isSkillOf": [],
                        "isKnowledgeOf": [],
                        "composes": [],
                        "hasSkill": [
                            "Récupérer_des_données_saisies_par_lutilisateur"
                        ],
                        "hasKnowledge": [],
                        "isComposedOf": [],
                        "requires": [
                            "Manipuler_des_fichiers_Unix",
                            "Manipuler_des_variables",
                            "Manipuler_les_paramètres_dun_script",
                            "Substituer_une_commande_par_son_exécution",
                            "Répéter_des_instructions",
                            "Réaliser_des_tests_conditionnels",
                            "Exécuter_de_manière_sélective_des_commandes",
                            "Générer_une_séquence_de_nombres"
                        ],
                        "hasLearning": [],
                        "hasTraining": []
                    }
                },
                {
                    "name": "Réaliser_des_calculs_arithmétiques",
                    "type": "Competency",
                    "mastery": 0.8,
                    "trust": 1,
                    "cover": 1,
                    "relations": {
                        "isSkillOf": [],
                        "isKnowledgeOf": [],
                        "composes": [],
                        "hasSkill": [],
                        "hasKnowledge": [
                            "Connaître_la_syntaxe_dollar((__))",
                            "Connaître_la_notion_de_expression_arithmétique"
                        ],
                        "isComposedOf": [],
                        "requires": [],
                        "hasLearning": [],
                        "hasTraining": []
                    }
                },
                {
                    "name": "Substituer_une_commande_par_son_exécution",
                    "type": "Competency",
                    "mastery": 0.6,
                    "trust": 1,
                    "cover": 1,
                    "relations": {
                        "isSkillOf": [],
                        "isKnowledgeOf": [],
                        "composes": [],
                        "hasSkill": [
                            "Banaliser_un_caractère"
                        ],
                        "hasKnowledge": [
                            "Connaître_la_syntaxe_dollar(cmd)",
                            "Connaître_la_notion_de_banalisation_de_caractères",
                            "Connaître_le_caractère_de_substitution_de_commande"
                        ],
                        "isComposedOf": [],
                        "requires": [],
                        "hasLearning": [],
                        "hasTraining": []
                    }
                },
                {
                    "name": "Répéter_des_instructions",
                    "type": "Competency",
                    "mastery": 0.8,
                    "trust": 1,
                    "cover": 1,
                    "relations": {
                        "isSkillOf": [],
                        "isKnowledgeOf": [],
                        "composes": [],
                        "hasSkill": [],
                        "hasKnowledge": [
                            "Connaître_la_syntaxe_de_instruction_for",
                            "Connaître_la_syntaxe_de_instruction_while"
                        ],
                        "isComposedOf": [],
                        "requires": [
                            "Manipuler_des_variables",
                            "Manipuler_les_paramètres_dun_script",
                            "Substituer_une_commande_par_son_exécution",
                            "Réaliser_des_tests_conditionnels"
                        ],
                        "hasLearning": [],
                        "hasTraining": []
                    }
                },
                {
                    "name": "Réaliser_des_tests_conditionnels",
                    "type": "Competency",
                    "mastery": 0.6,
                    "trust": 0.8888888888888888,
                    "cover": 0.8888888888888888,
                    "relations": {
                        "isSkillOf": [],
                        "isKnowledgeOf": [],
                        "composes": [],
                        "hasSkill": [
                            "Comparer_des_nombres",
                            "Comparer_des_chaînes_de_caractères",
                            "Tester_létat_dun_fichier"
                        ],
                        "hasKnowledge": [
                            "Connaître_les_opérateurs_de_comparaison_de_caractères",
                            "Connaître_les_opérateurs_de_comparaison_numérique",
                            "Connaître_la_syntaxe_CrochetCrochet",
                            "Connaître_les_opérateurs_logiques",
                            "Connaître_la_syntaxe_IfThenElifElse",
                            "Connaître_les_tests_détat_de_fichier"
                        ],
                        "isComposedOf": [],
                        "requires": [],
                        "hasLearning": [],
                        "hasTraining": []
                    }
                },
                {
                    "name": "Exécuter_de_manière_sélective_des_commandes",
                    "type": "Competency",
                    "mastery": 0.8,
                    "trust": 1,
                    "cover": 1,
                    "relations": {
                        "isSkillOf": [],
                        "isKnowledgeOf": [],
                        "composes": [],
                        "hasSkill": [],
                        "hasKnowledge": [
                            "Connaître_la_syntaxe_de_instruction_case"
                        ],
                        "isComposedOf": [],
                        "requires": [],
                        "hasLearning": [],
                        "hasTraining": []
                    }
                },
                {
                    "name": "Générer_une_séquence_de_nombres",
                    "type": "Competency",
                    "mastery": 0,
                    "trust": 0,
                    "cover": 0,
                    "relations": {
                        "isSkillOf": [],
                        "isKnowledgeOf": [],
                        "composes": [],
                        "hasSkill": [],
                        "hasKnowledge": [
                            "Connaître_la_syntaxe_de_instruction_seq"
                        ],
                        "isComposedOf": [],
                        "requires": [],
                        "hasLearning": [],
                        "hasTraining": []
                    }
                }
            ],
            "resources": [
                {
                    "id": "asker:742",
                    "name": "Questionnaire à réponse courte - Obtenir la valeur affectée à une variable",
                    "interactivityType": "active",
                    "learningResourceType": "fill-in",
                    "significanceLevel": 2,
                    "difficulty": 2,
                    "typicalLearningTime": 2,
                    "learningPlatform": "asker",
                    "location": "https:\/\/asker.univ-lyon1.fr\/front\/#\/learner\/model\/742",
                    "author": "ext_Julien.Broisin",
                    "language": "fr",
                    "generative": true
                },
                {
                    "id": "asker:743",
                    "name": "Question à choix multiple - Afficher la valeur d'une variable",
                    "interactivityType": "active",
                    "learningResourceType": "choice",
                    "significanceLevel": 2,
                    "difficulty": 1,
                    "typicalLearningTime": 2,
                    "learningPlatform": "asker",
                    "location": "https:\/\/asker.univ-lyon1.fr\/front\/#\/learner\/model\/743",
                    "author": "ext_Julien.Broisin",
                    "language": "fr",
                    "generative": true
                },
                {
                    "id": "asker:744",
                    "name": "Questionnaire à réponse courte - Obtenir la valeur d'un paramètre",
                    "interactivityType": "active",
                    "learningResourceType": "fill-in",
                    "significanceLevel": 2,
                    "difficulty": 2,
                    "typicalLearningTime": 2,
                    "learningPlatform": "asker",
                    "location": "https:\/\/asker.univ-lyon1.fr\/front\/#\/learner\/model\/744",
                    "author": "ext_Julien.Broisin",
                    "language": "fr",
                    "generative": true
                },
                {
                    "id": "asker:736",
                    "name": "Questionnaire à réponse courte - Affecter une valeur à une variable",
                    "interactivityType": "active",
                    "learningResourceType": "fill-in",
                    "significanceLevel": 1,
                    "difficulty": 2,
                    "typicalLearningTime": 5,
                    "learningPlatform": "asker",
                    "location": "https:\/\/asker.univ-lyon1.fr\/front\/#\/learner\/model\/736",
                    "author": "ext_Julien.Broisin",
                    "language": "fr",
                    "generative": true
                },
                {
                    "id": "asker:749",
                    "name": "Question à réponse courte - Affecter le résultat d'une commande à une variable",
                    "interactivityType": "active",
                    "learningResourceType": "fill-in",
                    "significanceLevel": 2,
                    "difficulty": 2,
                    "typicalLearningTime": 3,
                    "learningPlatform": "asker",
                    "location": "https:\/\/asker.univ-lyon1.fr\/front\/#\/learner\/model\/749",
                    "author": "ext_Julien.Broisin",
                    "language": "fr",
                    "generative": true
                },
                {
                    "id": "asker:716",
                    "name": "QCM (question unique)",
                    "interactivityType": "active",
                    "learningResourceType": "choice",
                    "significanceLevel": 1,
                    "difficulty": 1,
                    "typicalLearningTime": 2,
                    "learningPlatform": "asker",
                    "location": "https:\/\/asker.univ-lyon1.fr\/front\/#\/learner\/model\/716",
                    "author": "ext_Julien.Broisin",
                    "language": "fr",
                    "generative": true
                },
                {
                    "id": "asker:762",
                    "name": "Question à réponse courte - Renommer un fichier Unix",
                    "interactivityType": "active",
                    "learningResourceType": "fill-in",
                    "significanceLevel": 2,
                    "difficulty": 2,
                    "typicalLearningTime": 3,
                    "learningPlatform": "asker",
                    "location": "https:\/\/asker.univ-lyon1.fr\/front\/#\/learner\/model\/762",
                    "author": "ext_Julien.Broisin",
                    "language": "fr",
                    "generative": true
                },
                {
                    "id": "asker:739",
                    "name": "Question à choix multiple - Créer un fichier Unix",
                    "interactivityType": "active",
                    "learningResourceType": "choice",
                    "significanceLevel": 2,
                    "difficulty": 1,
                    "typicalLearningTime": 2,
                    "learningPlatform": "asker",
                    "location": "https:\/\/asker.univ-lyon1.fr\/front\/#\/learner\/model\/739",
                    "author": "ext_Julien.Broisin",
                    "language": "fr",
                    "generative": true
                },
                {
                    "id": "asker:741",
                    "name": "Questionnaire à réponse courte - Créer un fichier Unix",
                    "interactivityType": "active",
                    "learningResourceType": "fill-in",
                    "significanceLevel": 2,
                    "difficulty": 2,
                    "typicalLearningTime": 2,
                    "learningPlatform": "asker",
                    "location": "https:\/\/asker.univ-lyon1.fr\/front\/#\/learner\/model\/741",
                    "author": "ext_Julien.Broisin",
                    "language": "fr",
                    "generative": true
                },
                {
                    "id": "asker:738",
                    "name": "Appariement : droits - Modifier les droits d'un fichier Unix",
                    "interactivityType": "active",
                    "learningResourceType": "matching",
                    "significanceLevel": 1,
                    "difficulty": 2,
                    "typicalLearningTime": 5,
                    "learningPlatform": "asker",
                    "location": "https:\/\/asker.univ-lyon1.fr\/front\/#\/learner\/model\/738",
                    "author": "ext_Julien.Broisin",
                    "language": "fr",
                    "generative": true
                },
                {
                    "id": "asker:733",
                    "name": "Question à choix multiple - Modifier les droits d'un fichier Unix",
                    "interactivityType": "active",
                    "learningResourceType": "choice",
                    "significanceLevel": 1,
                    "difficulty": 1,
                    "typicalLearningTime": 2,
                    "learningPlatform": "asker",
                    "location": "https:\/\/asker.univ-lyon1.fr\/front\/#\/learner\/model\/733",
                    "author": "ext_Julien.Broisin",
                    "language": "fr",
                    "generative": true
                },
                {
                    "id": "asker:734",
                    "name": "Appariement - Modifier les droits d'un fichier Unix",
                    "interactivityType": "active",
                    "learningResourceType": "matching",
                    "significanceLevel": 1,
                    "difficulty": 2,
                    "typicalLearningTime": 5,
                    "learningPlatform": "asker",
                    "location": "https:\/\/asker.univ-lyon1.fr\/front\/#\/learner\/model\/734",
                    "author": "ext_Julien.Broisin",
                    "language": "fr",
                    "generative": true
                },
                {
                    "id": "asker:748",
                    "name": "Appariement : caractère spécial - Banaliser\/commenter un caractère",
                    "interactivityType": "active",
                    "learningResourceType": "matching",
                    "significanceLevel": 2,
                    "difficulty": 2,
                    "typicalLearningTime": 3,
                    "learningPlatform": "asker",
                    "location": "https:\/\/asker.univ-lyon1.fr\/front\/#\/learner\/model\/748",
                    "author": "ext_Julien.Broisin",
                    "language": "fr",
                    "generative": true
                },
                {
                    "id": "asker:735",
                    "name": "Question à choix multiple - Obtenir la valeur affectée à une variable",
                    "interactivityType": "active",
                    "learningResourceType": "choice",
                    "significanceLevel": 1,
                    "difficulty": 1,
                    "typicalLearningTime": 2,
                    "learningPlatform": "asker",
                    "location": "https:\/\/asker.univ-lyon1.fr\/front\/#\/learner\/model\/735",
                    "author": "ext_Julien.Broisin",
                    "language": "fr",
                    "generative": true
                },
                {
                    "id": "asker:758",
                    "name": "Question à réponse courte - Récupérer des données saisies par l'utilisateur",
                    "interactivityType": "active",
                    "learningResourceType": "fill-in",
                    "significanceLevel": 2,
                    "difficulty": 2,
                    "typicalLearningTime": 3,
                    "learningPlatform": "asker",
                    "location": "https:\/\/asker.univ-lyon1.fr\/front\/#\/learner\/model\/758",
                    "author": "ext_Julien.Broisin",
                    "language": "fr",
                    "generative": true
                },
                {
                    "id": "asker:759",
                    "name": "Questionnaire à choix multiple - Récupérer des données saisies par l'utilisateur",
                    "interactivityType": "active",
                    "learningResourceType": "choice",
                    "significanceLevel": 1,
                    "difficulty": 2,
                    "typicalLearningTime": 3,
                    "learningPlatform": "asker",
                    "location": "https:\/\/asker.univ-lyon1.fr\/front\/#\/learner\/model\/759",
                    "author": "ext_Julien.Broisin",
                    "language": "fr",
                    "generative": true
                },
                {
                    "id": "asker:761",
                    "name": "Questionnaire à choix multiple - Les options de la commande read",
                    "interactivityType": "active",
                    "learningResourceType": "choice",
                    "significanceLevel": 1,
                    "difficulty": 1,
                    "typicalLearningTime": 4,
                    "learningPlatform": "asker",
                    "location": "https:\/\/asker.univ-lyon1.fr\/front\/#\/learner\/model\/761",
                    "author": "ext_Julien.Broisin",
                    "language": "fr",
                    "generative": true
                },
                {
                    "id": "asker:756",
                    "name": "Appariement : instructions Shell - Connaître les instructions principales",
                    "interactivityType": "active",
                    "learningResourceType": "matching",
                    "significanceLevel": 2,
                    "difficulty": 2,
                    "typicalLearningTime": 4,
                    "learningPlatform": "asker",
                    "location": "https:\/\/asker.univ-lyon1.fr\/front\/#\/learner\/model\/756",
                    "author": "ext_Julien.Broisin",
                    "language": "fr",
                    "generative": true
                },
                {
                    "id": "asker:751",
                    "name": "Question à choix multiple - Obtenir la valeur d'un paramètre",
                    "interactivityType": "active",
                    "learningResourceType": "choice",
                    "significanceLevel": 1,
                    "difficulty": 1,
                    "typicalLearningTime": 3,
                    "learningPlatform": "asker",
                    "location": "https:\/\/asker.univ-lyon1.fr\/front\/#\/learner\/model\/751",
                    "author": "ext_Julien.Broisin",
                    "language": "fr",
                    "generative": true
                },
                {
                    "id": "asker:745",
                    "name": "Question à choix multiple - Obtenir la valeur de plusieurs paramètres",
                    "interactivityType": "active",
                    "learningResourceType": "choice",
                    "significanceLevel": 2,
                    "difficulty": 1,
                    "typicalLearningTime": 2,
                    "learningPlatform": "asker",
                    "location": "https:\/\/asker.univ-lyon1.fr\/front\/#\/learner\/model\/745",
                    "author": "ext_Julien.Broisin",
                    "language": "fr",
                    "generative": true
                },
                {
                    "id": "asker:747",
                    "name": "Questionnaire à réponse courte - Banaliser un caractère",
                    "interactivityType": "active",
                    "learningResourceType": "fill-in",
                    "significanceLevel": 2,
                    "difficulty": 2,
                    "typicalLearningTime": 3,
                    "learningPlatform": "asker",
                    "location": "https:\/\/asker.univ-lyon1.fr\/front\/#\/learner\/model\/747",
                    "author": "ext_Julien.Broisin",
                    "language": "fr",
                    "generative": true
                },
                {
                    "id": "asker:746",
                    "name": "Question à choix multiple - Banaliser un caractère",
                    "interactivityType": "active",
                    "learningResourceType": "choice",
                    "significanceLevel": 2,
                    "difficulty": 1,
                    "typicalLearningTime": 2,
                    "learningPlatform": "asker",
                    "location": "https:\/\/asker.univ-lyon1.fr\/front\/#\/learner\/model\/746",
                    "author": "ext_Julien.Broisin",
                    "language": "fr",
                    "generative": true
                },
                {
                    "id": "asker:760",
                    "name": "Question à réponse courte - Supprimer un fichier",
                    "interactivityType": "active",
                    "learningResourceType": "fill-in",
                    "significanceLevel": 2,
                    "difficulty": 2,
                    "typicalLearningTime": 5,
                    "learningPlatform": "asker",
                    "location": "https:\/\/asker.univ-lyon1.fr\/front\/#\/learner\/model\/760",
                    "author": "ext_Julien.Broisin",
                    "language": "fr",
                    "generative": true
                },
                {
                    "id": "asker:754",
                    "name": "Questionnaire à choix multiple - Interpréter de manière numérique une variable",
                    "interactivityType": "active",
                    "learningResourceType": "choice",
                    "significanceLevel": 2,
                    "difficulty": 2,
                    "typicalLearningTime": 5,
                    "learningPlatform": "asker",
                    "location": "https:\/\/asker.univ-lyon1.fr\/front\/#\/learner\/model\/754",
                    "author": "ext_Julien.Broisin",
                    "language": "fr",
                    "generative": true
                },
                {
                    "id": "asker:755",
                    "name": "Question à réponse courte - Interpréter de façon numérique la valeur d'une variable",
                    "interactivityType": "active",
                    "learningResourceType": "fill-in",
                    "significanceLevel": 2,
                    "difficulty": 3,
                    "typicalLearningTime": 4,
                    "learningPlatform": "asker",
                    "location": "https:\/\/asker.univ-lyon1.fr\/front\/#\/learner\/model\/755",
                    "author": "ext_Julien.Broisin",
                    "language": "fr",
                    "generative": true
                },
                {
                    "id": "webtraffic:shellesunix",
                    "name": "Entrées\/sorties sous Unix",
                    "interactivityType": "expositive",
                    "learningResourceType": "text",
                    "significanceLevel": 1,
                    "difficulty": 2,
                    "typicalLearningTime": 8,
                    "learningPlatform": "Serveur web traffic",
                    "location": "https:\/\/traffic.irit.fr\/~jbroisin\/TP5\/ESUnix.pdf",
                    "author": "Julien Broisin",
                    "language": "fr",
                    "generative": false
                },
                {
                    "id": "asker:757",
                    "name": "Appariement : commandes Unix - Connaître les commandes de base Unix",
                    "interactivityType": "active",
                    "learningResourceType": "matching",
                    "significanceLevel": 1,
                    "difficulty": 2,
                    "typicalLearningTime": 4,
                    "learningPlatform": "asker",
                    "location": "https:\/\/asker.univ-lyon1.fr\/front\/#\/learner\/model\/757",
                    "author": "ext_Julien.Broisin",
                    "language": "fr",
                    "generative": true
                },
                {
                    "id": "webtraffic:shellcmdbasefichiers",
                    "name": "Commandes de base pour la manipulation de fichiers",
                    "interactivityType": "expositive",
                    "learningResourceType": "text",
                    "significanceLevel": 2,
                    "difficulty": 2,
                    "typicalLearningTime": 10,
                    "learningPlatform": "Serveur web traffic",
                    "location": "https:\/\/traffic.irit.fr\/~jbroisin\/TP5\/CmdBase01.pdf",
                    "author": "Julien Broisin",
                    "language": "fr",
                    "generative": false
                },
                {
                    "id": "webtraffic:shellcmdnano",
                    "name": "L'éditeur Nano",
                    "interactivityType": "expositive",
                    "learningResourceType": "text",
                    "significanceLevel": 1,
                    "difficulty": 1,
                    "typicalLearningTime": 5,
                    "learningPlatform": "Serveur web traffic",
                    "location": "https:\/\/traffic.irit.fr\/~jbroisin\/TP5\/Nano.pdf",
                    "author": "Julien Broisin",
                    "language": "fr",
                    "generative": false
                },
                {
                    "id": "webtraffic:shellcmdtouch",
                    "name": "Commande pour la création d'un fichier vide",
                    "interactivityType": "expositive",
                    "learningResourceType": "text",
                    "significanceLevel": 1,
                    "difficulty": 1,
                    "typicalLearningTime": 2,
                    "learningPlatform": "Serveur web traffic",
                    "location": "https:\/\/traffic.irit.fr\/~jbroisin\/TP5\/CmdTouch.pdf",
                    "author": "Julien Broisin",
                    "language": "fr",
                    "generative": false
                },
                {
                    "id": "webtraffic:shelldroitsunix",
                    "name": "Notion de droits sous Unix",
                    "interactivityType": "expositive",
                    "learningResourceType": "text",
                    "significanceLevel": 2,
                    "difficulty": 2,
                    "typicalLearningTime": 6,
                    "learningPlatform": "Serveur web traffic",
                    "location": "https:\/\/traffic.irit.fr\/~jbroisin\/TP5\/DroitsUnix.pdf",
                    "author": "Julien Broisin",
                    "language": "fr",
                    "generative": false
                },
                {
                    "id": "webtraffic:shellbanalisationchar",
                    "name": "Banalisation d'un caractère",
                    "interactivityType": "expositive",
                    "learningResourceType": "text",
                    "significanceLevel": 1,
                    "difficulty": 1,
                    "typicalLearningTime": 3,
                    "learningPlatform": "Serveur web traffic",
                    "location": "https:\/\/traffic.irit.fr\/~jbroisin\/TP5\/BanalisationChar.pdf",
                    "author": "Julien Broisin",
                    "language": "fr",
                    "generative": false
                },
                {
                    "id": "webtraffic:shellvariablesenv",
                    "name": "Variables d'environnement en Shell",
                    "interactivityType": "expositive",
                    "learningResourceType": "text",
                    "significanceLevel": 1,
                    "difficulty": 2,
                    "typicalLearningTime": 5,
                    "learningPlatform": "Serveur web traffic",
                    "location": "https:\/\/traffic.irit.fr\/~jbroisin\/TP5\/VariablesEnv.pdf",
                    "author": "Julien Broisin",
                    "language": "fr",
                    "generative": false
                },
                {
                    "id": "asker:752",
                    "name": "Question à réponse courte - Connaître les variables d'environnement",
                    "interactivityType": "active",
                    "learningResourceType": "fill-in",
                    "significanceLevel": 1,
                    "difficulty": 1,
                    "typicalLearningTime": 2,
                    "learningPlatform": "asker",
                    "location": "https:\/\/asker.univ-lyon1.fr\/front\/#\/learner\/model\/752",
                    "author": "ext_Julien.Broisin",
                    "language": "fr",
                    "generative": true
                },
                {
                    "id": "webtraffic:shellobtentionaffectation",
                    "name": "Obtention et affichage de la valeur affectée à une variable",
                    "interactivityType": "expositive",
                    "learningResourceType": "text",
                    "significanceLevel": 2,
                    "difficulty": 1,
                    "typicalLearningTime": 3,
                    "learningPlatform": "Serveur web traffic",
                    "location": "https:\/\/traffic.irit.fr\/~jbroisin\/TP5\/ObtentionAffichage.pdf",
                    "author": "Julien Broisin",
                    "language": "fr",
                    "generative": false
                },
                {
                    "id": "webtraffic:shellnotionvariable",
                    "name": "Notion de variable en Shell",
                    "interactivityType": "expositive",
                    "learningResourceType": "text",
                    "significanceLevel": 2,
                    "difficulty": 1,
                    "typicalLearningTime": 5,
                    "learningPlatform": "Serveur web traffic",
                    "location": "https:\/\/traffic.irit.fr\/~jbroisin\/TP5\/NotionVariable.pdf",
                    "author": "Julien Broisin",
                    "language": "fr",
                    "generative": false
                },
                {
                    "id": "webtraffic:shellaffectation",
                    "name": "Affectation d'une valeur à une variable",
                    "interactivityType": "expositive",
                    "learningResourceType": "text",
                    "significanceLevel": 1,
                    "difficulty": 1,
                    "typicalLearningTime": 2,
                    "learningPlatform": "Serveur web traffic",
                    "location": "https:\/\/traffic.irit.fr\/~jbroisin\/TP5\/Affectation.pdf",
                    "author": "Julien Broisin",
                    "language": "fr",
                    "generative": false
                },
                {
                    "id": "webtraffic:shellarguments",
                    "name": "Paramètres positionnels",
                    "interactivityType": "expositive",
                    "learningResourceType": "text",
                    "significanceLevel": 1,
                    "difficulty": 1,
                    "typicalLearningTime": 3,
                    "learningPlatform": "Serveur web traffic",
                    "location": "https:\/\/traffic.irit.fr\/~jbroisin\/TP5\/Arguments.pdf",
                    "author": "Julien Broisin",
                    "language": "fr",
                    "generative": false
                },
                {
                    "id": "webtraffic:shellnotionfichier",
                    "name": "Notion de fichier sous Unix",
                    "interactivityType": "expositive",
                    "learningResourceType": "text",
                    "significanceLevel": 2,
                    "difficulty": 2,
                    "typicalLearningTime": 12,
                    "learningPlatform": "Serveur web traffic",
                    "location": "https:\/\/traffic.irit.fr\/~jbroisin\/TP5\/NotionFichier.pdf",
                    "author": "Julien Broisin",
                    "language": "fr",
                    "generative": false
                },
                {
                    "id": "asker:750",
                    "name": "Appariement : variables spéciales - Connaître les variables spéciales",
                    "interactivityType": "active",
                    "learningResourceType": "matching",
                    "significanceLevel": 2,
                    "difficulty": 2,
                    "typicalLearningTime": 4,
                    "learningPlatform": "asker",
                    "location": "https:\/\/asker.univ-lyon1.fr\/front\/#\/learner\/model\/750",
                    "author": "ext_Julien.Broisin",
                    "language": "fr",
                    "generative": true
                },
                {
                    "id": "webtraffic:shellvariablesspeciales",
                    "name": "Variables spéciales en Shell",
                    "interactivityType": "expositive",
                    "learningResourceType": "text",
                    "significanceLevel": 2,
                    "difficulty": 2,
                    "typicalLearningTime": 5,
                    "learningPlatform": "Serveur web traffic",
                    "location": "https:\/\/traffic.irit.fr\/~jbroisin\/TP5\/VarSpeciales.pdf",
                    "author": "Julien Broisin",
                    "language": "fr",
                    "generative": false
                },
                {
                    "id": "webtraffic:shellexpressionarithmetique",
                    "name": "Expressions arithmétiques en Shell",
                    "interactivityType": "expositive",
                    "learningResourceType": "text",
                    "significanceLevel": 1,
                    "difficulty": 1,
                    "typicalLearningTime": 5,
                    "learningPlatform": "Serveur web traffic",
                    "location": "https:\/\/traffic.irit.fr\/~jbroisin\/TP5\/ExpressionArithmetique.pdf",
                    "author": "Julien Broisin",
                    "language": "fr",
                    "generative": false
                }
            ]
        };
        return profil;
    }
    exports.getFrameworkSample = getFrameworkSample;
});
