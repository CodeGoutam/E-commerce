const Carousel = () => {
    return (
        <>
            <div
                id="carouselExampleFade"
                className="carousel slide carousel-fade mb-1 "
                style={{ marginTop: "65px", marginLeft: "10px", marginRight: "10px" }}
            >
                <div className="carousel-inner p-1">
                    <div className="carousel-item active">
                        <img
                            src="https://img.freepik.com/free-photo/freshly-italian-pizza-with-mozzarella-cheese-slice-generative-ai_188544-12347.jpg?w=996&t=st=1718166572~exp=1718167172~hmac=63182627d261fdfb08cef2bdd590f52ff3948a484728f86f69d8c4c92954a42e"
                            className="d-block w-100"
                            alt="pizza"
                            style={{
                                height: "260px",
                                objectFit: "fill",
                                backgroundSize: "auto"
                            }}
                        />
                    </div>
                    <div className="carousel-item">
                        <img
                            src="https://img.freepik.com/free-photo/exploding-burger-with-vegetables-melted-cheese-black-background-generative-ai_157027-1751.jpg?t=st=1718166638~exp=1718170238~hmac=9c10ea584456b4b650497cad8e3893eb4a5e840a85ed35959ba0e2df020c2e48&w=996"
                            className="d-block w-100"
                            alt="burger"
                            style={{
                                height: "260px",
                                objectFit: "fill",
                                backgroundSize: "auto",
                            }}
                        />
                    </div>
                    <div className="carousel-item">
                        <img
                            src="https://img.freepik.com/free-photo/floating-burger-with-bacon-wooden-table-copy-space_123827-29737.jpg?t=st=1718166700~exp=1718170300~hmac=24030bdb71c2f12c060502b0200954949b69c4b5a35a4552730327a95a3730c8&w=900"
                            className="d-block w-100"
                            alt="burger"
                            style={{
                                height: "260px",
                                objectFit: "fill",
                                backgroundSize: "auto",
                            }}
                        />
                    </div>
                </div>
                <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleFade"
                    data-bs-slide="prev"
                >
                    <span
                        className="carousel-control-prev-icon"
                        aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleFade"
                    data-bs-slide="next"
                >
                    <span
                        className="carousel-control-next-icon"
                        aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </>
    );
};
export default Carousel;
// https://source.unsplash.com/random/200×300/?pizza
// https://source.unsplash.com/random/200×300/?burger
// https://source.unsplash.com/random/200×300/?mango
