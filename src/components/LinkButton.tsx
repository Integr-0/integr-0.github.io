interface Prop {
    link: string;
    name: string;
}

export default function LinkButton(props: Prop) {
    return (
        <a href={props.link} className="btn btn-secondary" style={{ borderRadius: '40px', marginRight: '10px',}}>{props.name}  <i className="fa-solid fa-arrow-up-right-from-square" /></a>
    );
}