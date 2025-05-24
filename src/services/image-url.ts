const getCroppedImageUrl = (Url: string) => {

    if (!Url) return '';

    let target = 'media/';
    let index = Url.indexOf(target) + target.length;
    return Url.slice(0, index) + 'crop/600/400/' + Url.slice(index);
}

export default getCroppedImageUrl;