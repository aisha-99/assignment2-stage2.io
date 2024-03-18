        // Gallery Images
        var galleryImages = document.createElement('div');
        galleryImages.classList.add('gallery-images');
        movie.append(galleryImages);
        entry.fields.galleryImages.forEach(function(image){
            var galleryImage = document.createElement('img');
            galleryImage.src = image.fields.file.url;
            galleryImages.append(galleryImage);
        })
        if (entry.fields.galleryImages){
            console.log(entry.fields.galleryImages);
        }



        // Trailer Link
        console.log(entry.fields.trailerLink);
        var trailerLink = document.createElement('iframe');
        trailerLink.innerHTML = "link to " + entry.fields.trailerLink;
        trailerLink.href = entry.fields.trailerLink;
        movie.append(trailerLink);