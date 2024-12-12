export default function Site({image, link}) {
  return (
    <div>
      <a href={link}>
        <img src={image} />
      </a>
    </div>
  );
}
