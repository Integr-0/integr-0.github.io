interface Prop {
    src: string;
}

export default function StatImage(props: Prop) {
    return <img alt="image" src={props.src} className="icon" style={{height: "80%", width: "80%"}} />;
}