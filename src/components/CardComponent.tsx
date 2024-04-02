interface Prop {
    title: string;
    bio: string;
    link: string;
}

export default function card(prop: Prop) {
    return (
        <div
            className="card"
            style={{
                margin: "auto",
                marginTop: "40px",
                backgroundColor: "rgba(177, 177, 177, 0.35)",
                boxShadow: "rgba(0, 0, 0, 0.25) 0px 4px 4px",
                borderRadius: "40px",
            }}
        >
            <div className="card-body">
                <h5 className="card-title">{prop.title}</h5>
                <p className="card-text">{prop.bio}</p>
                <a
                    href={prop.link}
                    className="btn btn-secondary"
                    style={{ borderRadius: "40px" }}
                >
                    Go there{" "}
                    <i className="fa-solid fa-arrow-up-right-from-square" />
                </a>
            </div>
        </div>
    );
}
