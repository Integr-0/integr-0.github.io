interface Prop {
    src: string;
}

export default function Image(props: Prop) {
    return (
        <img alt="image" src={props.src} className="icon" />
    );
}