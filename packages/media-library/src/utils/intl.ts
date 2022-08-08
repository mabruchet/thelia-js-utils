const getLocale = () => document.documentElement.lang || (navigator.languages && navigator.languages[0]) || navigator.language || 'en'

export const locale = getLocale()

export const messages: Record<string, { [key: string]: string}> = {
  fr: {
    BlockImage__DOWNLOAD: "Télécharger une image",
    BlockImage__OR_DROP: "ou glisser-déposer une image",
    BlockImage__UPLOAD: "Sélectionnez une image depuis votre médiathèque",
    BlockImage__TITLE: "Titre de l'image",
    BlockImage__LINK: "Lien de l'image",
    BlockImage__LINK_PLACEHOLDER: "Lien au clic sur l'image",
    BlockImage__LIBRARY_MODAL_TITLE: "Rechercher une image",
    BlockImage__LIBRARY_MODAL_SEARCH: "Rechercher dans la médiathèque",
    BlockImage__LIBRARY_MODAL_TAG_FILTER: "Filtrer par tag",
    BlockImage__LIBRARY_LOADING: "Chargement de la librairie...",
    BlockImage__TOAST_WRONG_FILE_TYPE: "Votre image n'a pas pu être téléchargée. Veuillez vérifier que votre fichier est bien une image.",
    BlockImage__TOAST_MAX_FILE: "Veuillez uploader une seule image.",
    BlockImage__DROP_TO_UPLOAD: "Relacher pour uploader votre image",
    BlockImage__LIBRARY_NO_CONTENT: "Aucune image trouvée",
    BlockImage__LIBRARY_SEARCHING: "Recherche en cours...",

    REPLACE: "Remplacer",
    REPLACE_IMAGE: "Remplacer l'image",
    OPTIONAL: "Optionnel",
    CANCEL: "Annuler",
    DELETE: "Supprimer",
    SEARCH_BY: "Référence, nom, ...",
    LOADING: "Chargement...",
    DOWNLOADING: "Téléchargement...",
    ALL_TAGS: "Tous les tags",
    CHOOSE: "Choisir",
  },
  en: {
    BlockImage__DOWNLOAD: "Download an image",
    BlockImage__OR_DROP: "or drop an image",
    BlockImage__UPLOAD: "Select an image from your library",
    BlockImage__TITLE: "Image title",
    BlockImage__LINK: "Image link",
    BlockImage__LINK_PLACEHOLDER: "Link on click on image",
    BlockImage__LIBRARY_MODAL_TITLE: "Search an image",
    BlockImage__LIBRARY_MODAL_SEARCH: "Search in the library",
    BlockImage__LIBRARY_MODAL_TAG_FILTER: "Filter by tag",
    BlockImage__LIBRARY_LOADING: "Loading library...",
    BlockImage__TOAST_WRONG_FILE_TYPE: "Your image could not be uploaded. Please check that your file is an image.",
    BlockImage__TOAST_MAX_FILE: "Please upload only one image.",
    BlockImage__DROP_TO_UPLOAD: "Release to upload your image",
    BlockImage__LIBRARY_NO_CONTENT: "No image found",
    BlockImage__LIBRARY_SEARCHING: "Searching...",

    REPLACE: "Replace",
    REPLACE_IMAGE: "Replace image",
    OPTIONAL: "Optional",
    CANCEL: "Cancel",
    DELETE: "Delete",
    SEARCH_BY: "Reference, name, ...",
    LOADING: "Loading...",
    DOWNLOADING: "Downloading...",
    ALL_TAGS: "All tags",
    CHOOSE: "Choose",
  },
  es: {
    BlockImage__DOWNLOAD: "Descargar una imagen",
    BlockImage__OR_DROP: "o arrastrar una imagen",
    BlockImage__UPLOAD: "Seleccionar una imagen de tu biblioteca",
    BlockImage__TITLE: "Título de la imagen",
    BlockImage__LINK: "Enlace de la imagen",
    BlockImage__LINK_PLACEHOLDER: "Enlace al hacer clic en la imagen",
    BlockImage__LIBRARY_MODAL_TITLE: "Buscar una imagen",
    BlockImage__LIBRARY_MODAL_SEARCH: "Buscar en la biblioteca",
    BlockImage__LIBRARY_MODAL_TAG_FILTER: "Filtrar por tag",
    BlockImage__LIBRARY_LOADING: "Cargando la biblioteca...",
    BlockImage__TOAST_WRONG_FILE_TYPE: "Tu imagen no pudo ser subida. Por favor verifica que tu archivo es una imagen.",
    BlockImage__TOAST_MAX_FILE: "Por favor sube solo una imagen.",
    BlockImage__DROP_TO_UPLOAD: "Suelte para subir tu imagen",
    BlockImage__LIBRARY_NO_CONTENT: "No se encontraron imagenes",
    BlockImage__LIBRARY_SEARCHING: "Buscando...",

    REPLACE: "Reemplazar",
    REPLACE_IMAGE: "Reemplazar imagen",
    OPTIONAL: "Opcional",
    CANCEL: "Cancelar",
    DELETE: "Eliminar",
    SEARCH_BY: "Referencia, nombre, ...",
    LOADING: "Cargando...",
    DOWNLOADING: "Descargando...",
    ALL_TAGS: "Todos los tags",
    CHOOSE: "Elegir",
  },
  it: {
    BlockImage__DOWNLOAD: "Scarica un immagine",
    BlockImage__OR_DROP: "o trascina un immagine",
    BlockImage__UPLOAD: "Seleziona un immagine dalla tua libreria",
    BlockImage__TITLE: "Titolo dell immagine",
    BlockImage__LINK: "Link dell immagine",
    BlockImage__LINK_PLACEHOLDER: "Link al click sull immagine",
    BlockImage__LIBRARY_MODAL_TITLE: "Cerca un immagine",
    BlockImage__LIBRARY_MODAL_SEARCH: "Cerca nella libreria",
    BlockImage__LIBRARY_MODAL_TAG_FILTER: "Filtra per tag",
    BlockImage__LIBRARY_LOADING: "Caricamento della libreria...",
    BlockImage__TOAST_WRONG_FILE_TYPE: "La tua immagine non può essere caricata. Per favore verifica che il tuo file sia un immagine.",
    BlockImage__TOAST_MAX_FILE: "Per favore carica solo una immagine.",
    BlockImage__DROP_TO_UPLOAD: "Rilascia per caricare la tua immagine",
    BlockImage__LIBRARY_NO_CONTENT: "Nessuna immagine trovata",
    BlockImage__LIBRARY_SEARCHING: "Ricerca in corso...",

    REPLACE: "Sostituisci",
    REPLACE_IMAGE: "Sostituisci immagine",
    OPTIONAL: "Opzionale",
    CANCEL: "Annulla", 
    DELETE: "Elimina",
    SEARCH_BY: "Riferimento, nome, ...",
    LOADING: "Caricamento...",
    DOWNLOADING: "Scaricare...",
    ALL_TAGS: "Tutti i tag",
    CHOOSE: "Scegli",
  }
}