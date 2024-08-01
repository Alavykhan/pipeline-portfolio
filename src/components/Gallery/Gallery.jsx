import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"


const images = [
    "https://i.ibb.co/nPL193p/pipeline-9.jpg",
    "https://i.ibb.co/HnzWRpw/pipeline-1.jpg",
    "https://i.ibb.co/9w0sD3y/pipeline-2.jpg",
    "https://i.ibb.co/b5fCMQL/pipeline-4.jpg",
    "https://i.ibb.co/f2SrgKj/pipeline-5.jpg",
    "https://i.ibb.co/y8LNcN3/pipeline-6.jpg",
    "https://i.ibb.co/0nF6CXt/pipeline-3.jpg",
    "https://i.ibb.co/5nMk1cD/pipeline-7.jpg",
    "https://i.ibb.co/CBrhJQW/pipeline-8.jpg"
]


const Gallery = () => {

    return (
        <>

        <div className="mt-20 md:px-20 px-5">
        <h2 className="md:text-5xl font-semibold text-black mb-10">Capturing <span className="text-red-700">Moments</span></h2>
        <ResponsiveMasonry
        columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}
    >
        <Masonry gutter="20px">
            {images.map((image, i) => (
                <img
                    key={i}
                    src={image}
                    style={{width: "100%", display: "block",}}
                    alt=""
                />
            ))}
        </Masonry>
    </ResponsiveMasonry>
        </div>
        </>
    );
};

export default Gallery;