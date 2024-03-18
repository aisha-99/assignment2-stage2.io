
console.log("hello world");
var client = contentful.createClient({
    space: '9ivsylmw9p3m',
    accessToken: 'SjUQZDO7xSYc2IeDzAWqx5j0WuwEjMLPCPvt6QCeils',
  });

//console.log(client);

var allMovies = document.getElementById('all-movies');

client.getEntries({content_type: 'assignment2',}).then(function (entries) {
    entries.items.forEach(function (entry) {

        console.log(entry);
        var movieDiv = document.createElement('div'); // <div></div>
        var filmTitle = document.createElement('h3'); // <h3></h3>
        filmTitle.innerHTML = entry.fields.filmTitle; // <h3>name form content</h3>
        movieDiv.append(filmTitle);
        allMovies.append(movieDiv);

        // Main Image
        console.log(entry.fields.mainImage.fields.file.url);
        var mainImage = document.createElement('img');
        mainImage.classList.add('main-image');
        if (entry.fields.mainImage){
            mainImage.src = entry.fields.mainImage.fields.file.url;
            movieDiv.append(mainImage);
        }

        // Main Image Link
        var linkToDetails = document.createElement('a');
        linkToDetails.href = 'details.html?id=' + entry.sys.id;
        linkToDetails.appendChild(mainImage);
        
        // movieDiv.appendChild(mainImage); 
        movieDiv.appendChild(linkToDetails);
        allMovies.appendChild(movieDiv);

        // // Description
        // console.log(entry.fields.description);
        // var description = document.createElement('p');
        // description.innerHTML = entry.fields.description;
        // movieDiv.append(description);
        // console.log(entry);

        // // Gallery Images
        // var galleryImages = document.createElement('div');
        // galleryImages.classList.add('gallery-images');
        // movieDiv.append(galleryImages);
        // entry.fields.galleryImages.forEach(function(image){
        //     var galleryImage = document.createElement('img');
        //     galleryImage.src = image.fields.file.url;
        //     galleryImages.append(galleryImage);
        // })
        // if (entry.fields.galleryImages){
        //     console.log(entry.fields.galleryImages);
        // }

        // // Film Director
        // console.log(entry.fields.filmDirector);
        // var filmDirector = document.createElement('h4');
        // filmDirector.innerHTML = entry.fields.filmDirector;
        // movieDiv.append(filmDirector);

        // // Trailer Link
        // console.log(entry.fields.trailerLink);
        // var trailerLink = document.createElement('a');
        // trailerLink.innerHTML = "link to " + entry.fields.trailerLink;
        // trailerLink.href = entry.fields.trailerLink;
        // movieDiv.append(trailerLink);
        // // allMovies.append(movieDiv);
        






    //   if (entry.fields.productName) {
    //     console.log(entry.fields.productName);
    //   }
    });
  });