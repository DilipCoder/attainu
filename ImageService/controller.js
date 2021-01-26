import imageThumbnail from 'image-thumbnail';

const validURL = (str) => {
  var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
    '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
    '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
    '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
  return !!pattern.test(str);
}

export const generateThumbnail = async (req, res) => {
    try {
    const {uri} = req.body;
    if(!uri || !validURL(uri?.trim())){
        return res.status(500).json({ error: true, message: "enter valid url" });
    }
    const options = { width: 50, height: 50, responseType: 'base64' };
    const thumbnail = await imageThumbnail({ uri }, options);
    return res.status(200).json({ error: false, message: 'thumbnail generated', data: thumbnail });
    } catch (err) {
        return res.status(500).json({ error: true, message: e.message });
    }
    
}