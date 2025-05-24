import blankImage from "../assets/no-image-placeholder.webp"

const getCroppedImageUrl = (Url: string) => {

    if (!Url) return blankImage;

    let target = 'media/';
    let index = Url.indexOf(target) + target.length;
    return Url.slice(0, index) + 'crop/600/400/' + Url.slice(index);
}

export default getCroppedImageUrl;