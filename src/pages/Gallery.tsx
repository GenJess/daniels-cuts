
import { Navbar } from "@/components/Navbar";
import { Card } from "@/components/ui/card";

const Gallery = () => {
  // Array of barbershop related images
  // Reference images from the public/photo_gallery_images folder
  const images = [
    "/photo_gallery_images/gallery_image_1.jpg",
    "/photo_gallery_images/gallery_image_2.jpg",
    "/photo_gallery_images/gallery_image_3.jpg",
    "/photo_gallery_images/gallery_image_4.jpg",
    "/photo_gallery_images/gallery_image_5.jpg",
    "/photo_gallery_images/gallery_image_6.jpg",
    "/photo_gallery_images/gallery_image_7.jpg",
    "/photo_gallery_images/gallery_image_9.jpg",
    "/photo_gallery_images/gallery_image_10.jpg",
    "/photo_gallery_images/gallery_image_11.jpg",
    "/photo_gallery_images/gallery_image_12.jpg",
    "/photo_gallery_images/gallery_image_13.jpg",
    "/photo_gallery_images/gallery_image_14.jpg"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto py-16">
        <h1 className="font-playfair text-4xl mb-12 text-center">Our Gallery</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {images.map((image, index) => (
            <Card key={index} className="overflow-hidden">
              <img 
                src={image} 
                alt={`Barbershop gallery image ${index+1}`} 
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
              />
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
