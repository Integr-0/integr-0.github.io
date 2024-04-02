interface Prop {
    text: string;
    icon: string;
}

export default function Icon(props: Prop) {
    return (
        <p className={"title_center"}>
            <i className={props.icon} /> {props.text}
        </p>
    );
}
