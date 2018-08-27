
export function downLoadImage (url) {
    return new Promise((resolve, reject) => {
        const img = new Image()
        img.src = url
        img.onload = () => {
            resolve(img)
        }
    })
}