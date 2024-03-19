
var textInURL = window.location.search;
var parametersInURL = new URLSearchParams(textInURL);
var id = parametersInURL.get('id');

console.log(id);

var client = contentful.createClient({
    space: '9ivsylmw9p3m',
    accessToken: 'SjUQZDO7xSYc2IeDzAWqx5j0WuwEjMLPCPvt6QCeils',
  });

  var movieSection = document.querySelector('#movie .movie-section');
  var mainImageColumn = movieSection.querySelector('.main-image-column');
  var filmTextColumn = movieSection.querySelector('.film-text-column');
  var filmHeader = document.querySelector('.film-header');
  var gallerySection = document.querySelector('.film-gallery');

  client.getEntry(id).then(function (entry) {
    console.log(entry);

    // Film Title
    var filmTitle = document.createElement('h1');
    filmTitle.innerHTML = entry.fields.filmTitle;
    filmTitle.classList.add('film-title');
    filmHeader.appendChild(filmTitle);

    // Main Image
    console.log(entry.fields.mainImage.fields.file.url);
    var mainImage = document.createElement('img');
    mainImage.classList.add('main-image');
    if (entry.fields.mainImage){
        mainImage.src = entry.fields.mainImage.fields.file.url;
        mainImageColumn.appendChild(mainImage);
    }

    // Synopsis/Description
    console.log(entry.fields.description);
    var description = document.createElement('p');
    description.innerHTML = entry.fields.description;
    description.classList.add('description');
    filmTextColumn.querySelector('.film-text').appendChild(description);

    // Film Director
    console.log(entry.fields.filmDirector);
    var filmDirector = document.createElement('h3');
    filmDirector.innerHTML = entry.fields.filmDirector;
    filmTextColumn.querySelector('.film-text').appendChild(filmDirector);


        // Gallery Images
        var galleryImagesContainer = gallerySection.querySelector('.gallery-images');
        entry.fields.galleryImages.forEach(function(image){
        var galleryImage = document.createElement('img');
        galleryImage.src = image.fields.file.url;
        galleryImagesContainer.appendChild(galleryImage);
        });


        // Trailer Link
        console.log(entry.fields.trailerLink);
        var trailerSpot = document.getElementById('trailer');
        var trailerLink = document.createElement('iframe');
        
        trailerLink.src = entry.fields.trailerLink;
        console.log(entry.fields.trailerLink);
        // trailerLink.href = entry.fields.trailerLink;
        trailerSpot.append(trailerLink);
        
    });