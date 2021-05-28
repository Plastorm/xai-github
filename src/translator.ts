
interface TranslateClass{
    fr  :TranslateCategorie,

    [key :string] :TranslateCategorie
}

interface TranslateCategorie{
    mastery :TranslateCategorieContent,
    trust :TranslateCategorieContent,
    
    [key :string] :TranslateCategorieContent
}

interface TranslateCategorieContent{
    name  :string,
    title  :string,
    description :string
}

export let translate :TranslateClass = {
    'fr':{
        'mastery': {
            'name': 'Maîtrise',
            'title': 'Taux de maîtrise',
            'description': 'Estime ton niveau de maîtrise pour chaque compétence, calculé en fonction des travaux effectués en lien avec cette compétence.'
        },
        'trust': {
            'name': 'Confiance',
            'title': 'Taux de confiance',
            'description': 'Indique la confiance dans le calcul du taux de maîtrise. Cet indice dépend du nombre et de la nature des travaux effectués.'
        }
    }
};