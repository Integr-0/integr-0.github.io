interface Prop {
    src: string;
}

export default function StatImage(props: Prop) {
    return <img alt="image" src={props.src} className="icon" style={{height: "50%", width: "50%"}} />;
}