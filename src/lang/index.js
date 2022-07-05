export default function lang(router, file) {
    return import(`./${router}/${file}.json`)
} 
