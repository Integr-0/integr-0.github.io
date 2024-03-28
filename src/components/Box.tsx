interface Prop {
    content: JSX.Element;
}

export default function Box(props: Prop) {
    return (
        <div
            className="card"
            style={{
                margin: "auto",
                marginTop: "40px",
                backgroundColor: "rgba(177, 177, 177, 0.75)",
                boxShadow: "rgba(0, 0, 0, 0.25) 0px 4px 4px",
                borderRadius: "40px",
                width: "fit-content",
            }}
        >
            {props.content}
        </div>
    );
}
