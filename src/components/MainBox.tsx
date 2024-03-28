interface Prop {
    icon: string;
}

export default function MainBox(prop: Prop) {
    return (
        <div
            className="card"
            style={{
                margin: "auto",
                backgroundColor: "rgba(177, 177, 177, 0.75)",
                boxShadow: "rgba(0, 0, 0, 0.25) 0px 4px 4px",
                width: "fit-content",
                borderRadius: "40px",
            }}
        >
            <img
                alt="Logo"
                src={prop.icon}
                className="img"
                style={{
                    marginLeft: "30px",
                    marginRight: "30px",
                    marginTop: "30px",
                }}
            />
            <p className="title_center">Integr</p>
        </div>
    );
}
