export default function Price({ oldPrice, newPrice }) {
    return (
        <div className="Price">
            <span>{oldPrice}</span>
            <span>{newPrice}</span>
        </div>
    );
}
