
var textInURL = window.location.search;
var parametersInURL = new URLSearchParams(textInURL);
var id = parametersInURL.get('id');

console.log(id);

var client = contentful.createClient({
    space: '9ivsylmw9p3m',
    accessToken: 'SjUQZDO7xSYc2IeDzAWqx5j0WuwEjMLPCPvt6QCeils',
  });

  var movie = document.getElementById('movie');
  var filmHeader = document.querySelector('.film-header');
  var gallerySection = document.querySelector('.film-gallery');
  var trailer = document.querySelector('iframe')

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
            movie.append(mainImage);
        }

        // Synopsis/Description
        console.log(entry.fields.description);
        var description = document.createElement('p');
        description.innerHTML = entry.fields.description;
        description.classList.add('description');
        movie.append(description);
        console.log(entry);

        // Film Director
        console.log(entry.fields.filmDirector);
        var filmDirector = document.createElement('h4');
        filmDirector.innerHTML = entry.fields.filmDirector;
        movie.append(filmDirector);


        // Gallery Images
        var galleryImagesContainer = gallerySection.querySelector('.gallery-images');
        entry.fields.galleryImages.forEach(function(image){
        var galleryImage = document.createElement('img');
        galleryImage.src = image.fields.file.url;
        galleryImagesContainer.appendChild(galleryImage);
        });


        // Trailer Link
        console.log(entry.fields.trailerLink);
        var trailerLink = document.createElement('iframe');
        trailerLink.src = entry.fields.trailerLink;
        console.log( entry.fields.trailerLink);
        // trailerLink.href = entry.fields.trailerLink;
        movie.append(trailerLink);
        
    });