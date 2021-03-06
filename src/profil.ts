export interface FrameworkObjectBD {
  name      :string,
  objects   :Array<FrameworkNodeBD>,
  resources :Array<FrameworkResourceBD>
}

export interface FrameworkResourceBD {
  id                     :string,
  name                   :string,
  interactivityType      :string,
  learningResourceType   :string,
  significanceLevel      :number,
  difficulty             :number,
  typicalLearningTime    :number,
  learningPlatform       :string,
  location               :string,
  author                 :string,
  language               :string,
  generative             :Boolean
}

export interface FrameworkNodeBD {
  name                :string,
  type                :string,
  mastery             :number, 
  trust               :number,
  cover               :number, 
  relations           :FrameworkNodeRelation,

  [key :string] :(string | FrameworkNodeRelation | Array<string> | number)
}

interface FrameworkNodeRelation {
  isSkillOf                   :Array<string>,
  isKnowledgeOf               :Array<string>, 
  composes                    :Array<string>,
  hasSkill                    :Array<string>,
  hasKnowledge                :Array<string>, 
  isComposedOf                :Array<string>,
  requires?                   :Array<string>,
  complexifies?               :Array<string>,
  isComplexificationOf?       :Array<string>,
  isLeverOfUnderstandingOf?   :Array<string>,
  facilitatesUnderstandingOf? :Array<string>,
  comprises?                  :Array<string>,
  isComprisedIn?              :Array<string>,
  hasLearning?                :Array<string>,
  hasTraining?                :Array<string>,
  isRequiredBy?               :Array<string>,

  [key :string] :Array<string>
}

/**
 * @returns a test framework from real application. 
 */
export function getFrameworkSample() :FrameworkObjectBD {
  let profil :FrameworkObjectBD = {
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
            "Obtenir_la_valeur_affect??e_??_une_variable",
            "Conna??tre_la_notion_de_variable"
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
        "name": "Affecter_une_valeur_??_un_ou_plusieurs_param??tres_de_position",
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
            "Conna??tre_la_notion_de_variable"
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
            "Affecter_une_valeur_??_une_variable"
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
            "Conna??tre_la_notion_de_fichier_Unix"
          ],
          "hasLearning": [],
          "hasTraining": [
            "asker:762"
          ]
        }
      },
      {
        "name": "Affecter_une_valeur_??_une_variable",
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
            "Conna??tre_la_notion_de_variable"
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
        "name": "Tester_l??tat_dun_fichier",
        "type": "Skills",
        "mastery": 0.6,
        "trust": 1,
        "cover": 1,
        "relations": {
          "isSkillOf": [
            "R??aliser_des_tests_conditionnels"
          ],
          "isKnowledgeOf": [],
          "composes": [],
          "hasSkill": [],
          "hasKnowledge": [],
          "isComposedOf": [],
          "requires": [
            "Conna??tre_les_tests_d??tat_de_fichier"
          ],
          "hasLearning": [],
          "hasTraining": []
        }
      },
      {
        "name": "Cr??er_un_fichier_Unix",
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
            "Conna??tre_la_notion_de_fichier_Unix"
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
            "Ex??cuter_des_commandes_Unix"
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
            "Conna??tre_la_notion_de_fichier_Unix",
            "Conna??tre_la_notion_de_droits_sous_Unix"
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
            "Conna??tre_la_notion_de_fichier_Unix"
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
            "Conna??tre_la_notion_de_fichier_Unix"
          ],
          "hasLearning": [],
          "hasTraining": []
        }
      },
      {
        "name": "Obtenir_la_valeur_affect??e_??_une_variable",
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
            "Conna??tre_la_notion_de_variable"
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
            "R??aliser_des_tests_conditionnels"
          ],
          "isKnowledgeOf": [],
          "composes": [],
          "hasSkill": [],
          "hasKnowledge": [],
          "isComposedOf": [],
          "requires": [
            "Conna??tre_les_op??rateurs_de_comparaison_num??rique"
          ],
          "hasLearning": [],
          "hasTraining": []
        }
      },
      {
        "name": "R??cup??rer_des_donn??es_saisies_par_lutilisateur",
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
        "name": "Obtenir_la_valeur_de_un_ou_plusieurs_param??tres",
        "type": "Skills",
        "mastery": 0.8,
        "trust": 1,
        "cover": 1,
        "relations": {
          "isSkillOf": [
            "Manipuler_les_param??tres_dun_script"
          ],
          "isKnowledgeOf": [],
          "composes": [],
          "hasSkill": [],
          "hasKnowledge": [],
          "isComposedOf": [],
          "requires": [
            "Conna??tre_la_notion_de_param??tre"
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
        "name": "Banaliser_un_caract??re",
        "type": "Skills",
        "mastery": 0.8,
        "trust": 1,
        "cover": 1,
        "relations": {
          "isSkillOf": [
            "Substituer_une_commande_par_son_ex??cution"
          ],
          "isKnowledgeOf": [],
          "composes": [],
          "hasSkill": [],
          "hasKnowledge": [],
          "isComposedOf": [],
          "requires": [
            "Conna??tre_la_notion_de_banalisation_de_caract??res"
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
        "name": "Comparer_des_cha??nes_de_caract??res",
        "type": "Skills",
        "mastery": 0.6,
        "trust": 1,
        "cover": 1,
        "relations": {
          "isSkillOf": [
            "R??aliser_des_tests_conditionnels"
          ],
          "isKnowledgeOf": [],
          "composes": [],
          "hasSkill": [],
          "hasKnowledge": [],
          "isComposedOf": [],
          "requires": [
            "Conna??tre_les_op??rateurs_de_comparaison_de_caract??res"
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
            "Conna??tre_la_notion_de_fichier_Unix"
          ],
          "hasLearning": [],
          "hasTraining": [
            "asker:760"
          ]
        }
      },
      {
        "name": "Interpr??ter_de_fa??on_num??rique_la_valeur_dune_variable",
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
            "Conna??tre_la_notion_de_variable"
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
        "name": "Conna??tre_les_op??rateurs_de_comparaison_num??rique",
        "type": "Knowledge",
        "mastery": 0.8,
        "trust": 1,
        "cover": 1,
        "relations": {
          "isSkillOf": [],
          "isKnowledgeOf": [
            "R??aliser_des_tests_conditionnels"
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
        "name": "Conna??tre_la_notion_de_redirection_entr??e_et_sortie",
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
        "name": "Conna??tre_les_commandes_de_base_Unix",
        "type": "Knowledge",
        "mastery": 0,
        "trust": 0,
        "cover": 0,
        "relations": {
          "isSkillOf": [],
          "isKnowledgeOf": [
            "Ex??cuter_des_commandes_Unix"
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
        "name": "Conna??tre_la_syntaxe_dollar(cmd)",
        "type": "Knowledge",
        "mastery": 0.8,
        "trust": 1,
        "cover": 1,
        "relations": {
          "isSkillOf": [],
          "isKnowledgeOf": [
            "Substituer_une_commande_par_son_ex??cution"
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
        "name": "Conna??tre_la_notion_de_droits_sous_Unix",
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
        "name": "Conna??tre_la_notion_de_banalisation_de_caract??res",
        "type": "Knowledge",
        "mastery": 0.8,
        "trust": 1,
        "cover": 1,
        "relations": {
          "isSkillOf": [],
          "isKnowledgeOf": [
            "Substituer_une_commande_par_son_ex??cution"
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
        "name": "Conna??tre_les_variables_denvironnement",
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
        "name": "Conna??tre_la_syntaxe_de_instruction_case",
        "type": "Knowledge",
        "mastery": 0.8,
        "trust": 1,
        "cover": 1,
        "relations": {
          "isSkillOf": [],
          "isKnowledgeOf": [
            "Ex??cuter_de_mani??re_s??lective_des_commandes"
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
        "name": "Conna??tre_la_syntaxe_de_instruction_seq",
        "type": "Knowledge",
        "mastery": 0,
        "trust": 0,
        "cover": 0,
        "relations": {
          "isSkillOf": [],
          "isKnowledgeOf": [
            "G??n??rer_une_s??quence_de_nombres"
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
        "name": "Conna??tre_le_caract??re_de_substitution_de_commande",
        "type": "Knowledge",
        "mastery": 0.8,
        "trust": 1,
        "cover": 1,
        "relations": {
          "isSkillOf": [],
          "isKnowledgeOf": [
            "Substituer_une_commande_par_son_ex??cution"
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
        "name": "Conna??tre_la_syntaxe_IfThenElifElse",
        "type": "Knowledge",
        "mastery": 0,
        "trust": 0,
        "cover": 0,
        "relations": {
          "isSkillOf": [],
          "isKnowledgeOf": [
            "R??aliser_des_tests_conditionnels"
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
        "name": "Conna??tre_la_syntaxe_de_instruction_set",
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
        "name": "Conna??tre_la_notion_de_variable",
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
        "name": "Conna??tre_la_syntaxe_de_instruction_while",
        "type": "Knowledge",
        "mastery": 0.8,
        "trust": 1,
        "cover": 1,
        "relations": {
          "isSkillOf": [],
          "isKnowledgeOf": [
            "R??p??ter_des_instructions"
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
        "name": "Conna??tre_la_notion_de_param??tre",
        "type": "Knowledge",
        "mastery": 0.8,
        "trust": 1,
        "cover": 1,
        "relations": {
          "isSkillOf": [],
          "isKnowledgeOf": [
            "Manipuler_les_param??tres_dun_script"
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
        "name": "Conna??tre_la_syntaxe_dollar((__))",
        "type": "Knowledge",
        "mastery": 0.8,
        "trust": 1,
        "cover": 1,
        "relations": {
          "isSkillOf": [],
          "isKnowledgeOf": [
            "R??aliser_des_calculs_arithm??tiques"
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
        "name": "Conna??tre_les_op??rateurs_de_comparaison_de_caract??res",
        "type": "Knowledge",
        "mastery": 0.4,
        "trust": 1,
        "cover": 1,
        "relations": {
          "isSkillOf": [],
          "isKnowledgeOf": [
            "R??aliser_des_tests_conditionnels"
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
        "name": "Conna??tre_la_notion_de_fichier_Unix",
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
        "name": "Conna??tre_la_syntaxe_CrochetCrochet",
        "type": "Knowledge",
        "mastery": 0.8,
        "trust": 1,
        "cover": 1,
        "relations": {
          "isSkillOf": [],
          "isKnowledgeOf": [
            "R??aliser_des_tests_conditionnels"
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
        "name": "Conna??tre_les_variables_sp??ciales",
        "type": "Knowledge",
        "mastery": 0.8,
        "trust": 1,
        "cover": 1,
        "relations": {
          "isSkillOf": [],
          "isKnowledgeOf": [
            "Manipuler_les_param??tres_dun_script",
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
        "name": "Conna??tre_la_syntaxe_de_instruction_for",
        "type": "Knowledge",
        "mastery": 0.8,
        "trust": 1,
        "cover": 1,
        "relations": {
          "isSkillOf": [],
          "isKnowledgeOf": [
            "R??p??ter_des_instructions"
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
        "name": "Conna??tre_la_notion_de_expression_arithm??tique",
        "type": "Knowledge",
        "mastery": 0.8,
        "trust": 1,
        "cover": 1,
        "relations": {
          "isSkillOf": [],
          "isKnowledgeOf": [
            "R??aliser_des_calculs_arithm??tiques"
          ],
          "composes": [],
          "hasSkill": [],
          "hasKnowledge": [],
          "isComposedOf": [],
          "requires": [
            "Banaliser_un_caract??re"
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
        "name": "Conna??tre_les_op??rateurs_logiques",
        "type": "Knowledge",
        "mastery": 0.8,
        "trust": 1,
        "cover": 1,
        "relations": {
          "isSkillOf": [],
          "isKnowledgeOf": [
            "R??aliser_des_tests_conditionnels"
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
        "name": "Conna??tre_les_tests_d??tat_de_fichier",
        "type": "Knowledge",
        "mastery": 0.6,
        "trust": 1,
        "cover": 1,
        "relations": {
          "isSkillOf": [],
          "isKnowledgeOf": [
            "R??aliser_des_tests_conditionnels"
          ],
          "composes": [],
          "hasSkill": [],
          "hasKnowledge": [],
          "isComposedOf": [],
          "requires": [
            "Conna??tre_la_notion_de_fichier_Unix",
            "Conna??tre_la_notion_de_droits_sous_Unix"
          ],
          "hasLearning": [],
          "hasTraining": []
        }
      },
      {
        "name": "Ex??cuter_des_commandes_Unix",
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
            "Conna??tre_les_commandes_de_base_Unix"
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
            "Cr??er_un_fichier_Unix"
          ],
          "hasKnowledge": [
            "Conna??tre_la_notion_de_fichier_Unix",
            "Conna??tre_la_notion_de_redirection_entr??e_et_sortie",
            "Conna??tre_la_notion_de_droits_sous_Unix"
          ],
          "isComposedOf": [],
          "requires": [
            "Ex??cuter_des_commandes_Unix"
          ],
          "hasLearning": [],
          "hasTraining": []
        }
      },
      {
        "name": "Manipuler_les_param??tres_dun_script",
        "type": "Competency",
        "mastery": 0.8000000000000002,
        "trust": 1,
        "cover": 1,
        "relations": {
          "isSkillOf": [],
          "isKnowledgeOf": [],
          "composes": [],
          "hasSkill": [
            "Obtenir_la_valeur_de_un_ou_plusieurs_param??tres"
          ],
          "hasKnowledge": [
            "Conna??tre_la_notion_de_param??tre",
            "Conna??tre_les_variables_sp??ciales"
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
            "Obtenir_la_valeur_affect??e_??_une_variable",
            "Affecter_une_valeur_??_un_ou_plusieurs_param??tres_de_position",
            "Modifier_la_valeur_de_une_variable",
            "Interpr??ter_de_fa??on_num??rique_la_valeur_dune_variable",
            "Affecter_une_valeur_??_une_variable"
          ],
          "hasKnowledge": [
            "Conna??tre_les_variables_sp??ciales",
            "Conna??tre_les_variables_denvironnement",
            "Conna??tre_la_notion_de_variable",
            "Conna??tre_la_syntaxe_de_instruction_set"
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
            "R??cup??rer_des_donn??es_saisies_par_lutilisateur"
          ],
          "hasKnowledge": [],
          "isComposedOf": [],
          "requires": [
            "Manipuler_des_fichiers_Unix",
            "Manipuler_des_variables",
            "Manipuler_les_param??tres_dun_script",
            "Substituer_une_commande_par_son_ex??cution",
            "R??p??ter_des_instructions",
            "R??aliser_des_tests_conditionnels",
            "Ex??cuter_de_mani??re_s??lective_des_commandes",
            "G??n??rer_une_s??quence_de_nombres"
          ],
          "hasLearning": [],
          "hasTraining": []
        }
      },
      {
        "name": "R??aliser_des_calculs_arithm??tiques",
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
            "Conna??tre_la_syntaxe_dollar((__))",
            "Conna??tre_la_notion_de_expression_arithm??tique"
          ],
          "isComposedOf": [],
          "requires": [],
          "hasLearning": [],
          "hasTraining": []
        }
      },
      {
        "name": "Substituer_une_commande_par_son_ex??cution",
        "type": "Competency",
        "mastery": 0.6,
        "trust": 1,
        "cover": 1,
        "relations": {
          "isSkillOf": [],
          "isKnowledgeOf": [],
          "composes": [],
          "hasSkill": [
            "Banaliser_un_caract??re"
          ],
          "hasKnowledge": [
            "Conna??tre_la_syntaxe_dollar(cmd)",
            "Conna??tre_la_notion_de_banalisation_de_caract??res",
            "Conna??tre_le_caract??re_de_substitution_de_commande"
          ],
          "isComposedOf": [],
          "requires": [],
          "hasLearning": [],
          "hasTraining": []
        }
      },
      {
        "name": "R??p??ter_des_instructions",
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
            "Conna??tre_la_syntaxe_de_instruction_for",
            "Conna??tre_la_syntaxe_de_instruction_while"
          ],
          "isComposedOf": [],
          "requires": [
            "Manipuler_des_variables",
            "Manipuler_les_param??tres_dun_script",
            "Substituer_une_commande_par_son_ex??cution",
            "R??aliser_des_tests_conditionnels"
          ],
          "hasLearning": [],
          "hasTraining": []
        }
      },
      {
        "name": "R??aliser_des_tests_conditionnels",
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
            "Comparer_des_cha??nes_de_caract??res",
            "Tester_l??tat_dun_fichier"
          ],
          "hasKnowledge": [
            "Conna??tre_les_op??rateurs_de_comparaison_de_caract??res",
            "Conna??tre_les_op??rateurs_de_comparaison_num??rique",
            "Conna??tre_la_syntaxe_CrochetCrochet",
            "Conna??tre_les_op??rateurs_logiques",
            "Conna??tre_la_syntaxe_IfThenElifElse",
            "Conna??tre_les_tests_d??tat_de_fichier"
          ],
          "isComposedOf": [],
          "requires": [],
          "hasLearning": [],
          "hasTraining": []
        }
      },
      {
        "name": "Ex??cuter_de_mani??re_s??lective_des_commandes",
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
            "Conna??tre_la_syntaxe_de_instruction_case"
          ],
          "isComposedOf": [],
          "requires": [],
          "hasLearning": [],
          "hasTraining": []
        }
      },
      {
        "name": "G??n??rer_une_s??quence_de_nombres",
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
            "Conna??tre_la_syntaxe_de_instruction_seq"
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
        "name": "Questionnaire ?? r??ponse courte - Obtenir la valeur affect??e ?? une variable",
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
        "name": "Question ?? choix multiple - Afficher la valeur d'une variable",
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
        "name": "Questionnaire ?? r??ponse courte - Obtenir la valeur d'un param??tre",
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
        "name": "Questionnaire ?? r??ponse courte - Affecter une valeur ?? une variable",
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
        "name": "Question ?? r??ponse courte - Affecter le r??sultat d'une commande ?? une variable",
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
        "name": "Question ?? r??ponse courte - Renommer un fichier Unix",
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
        "name": "Question ?? choix multiple - Cr??er un fichier Unix",
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
        "name": "Questionnaire ?? r??ponse courte - Cr??er un fichier Unix",
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
        "name": "Question ?? choix multiple - Modifier les droits d'un fichier Unix",
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
        "name": "Appariement : caract??re sp??cial - Banaliser\/commenter un caract??re",
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
        "name": "Question ?? choix multiple - Obtenir la valeur affect??e ?? une variable",
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
        "name": "Question ?? r??ponse courte - R??cup??rer des donn??es saisies par l'utilisateur",
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
        "name": "Questionnaire ?? choix multiple - R??cup??rer des donn??es saisies par l'utilisateur",
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
        "name": "Questionnaire ?? choix multiple - Les options de la commande read",
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
        "name": "Appariement : instructions Shell - Conna??tre les instructions principales",
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
        "name": "Question ?? choix multiple - Obtenir la valeur d'un param??tre",
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
        "name": "Question ?? choix multiple - Obtenir la valeur de plusieurs param??tres",
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
        "name": "Questionnaire ?? r??ponse courte - Banaliser un caract??re",
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
        "name": "Question ?? choix multiple - Banaliser un caract??re",
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
        "name": "Question ?? r??ponse courte - Supprimer un fichier",
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
        "name": "Questionnaire ?? choix multiple - Interpr??ter de mani??re num??rique une variable",
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
        "name": "Question ?? r??ponse courte - Interpr??ter de fa??on num??rique la valeur d'une variable",
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
        "name": "Entr??es\/sorties sous Unix",
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
        "name": "Appariement : commandes Unix - Conna??tre les commandes de base Unix",
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
        "name": "L'??diteur Nano",
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
        "name": "Commande pour la cr??ation d'un fichier vide",
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
        "name": "Banalisation d'un caract??re",
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
        "name": "Question ?? r??ponse courte - Conna??tre les variables d'environnement",
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
        "name": "Obtention et affichage de la valeur affect??e ?? une variable",
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
        "name": "Affectation d'une valeur ?? une variable",
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
        "name": "Param??tres positionnels",
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
        "name": "Appariement : variables sp??ciales - Conna??tre les variables sp??ciales",
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
        "name": "Variables sp??ciales en Shell",
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
        "name": "Expressions arithm??tiques en Shell",
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
  }
  return profil;
}