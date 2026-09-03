import referenceImage from '../../assets/images/techbrain-reference.png';

export default function CropImage({ className = '', alt, loading = 'lazy' }) {
  return (
    <div className={`crop-frame ${className}`}>
      <img src={referenceImage} alt={alt} loading={loading} />
    </div>
  );
}
