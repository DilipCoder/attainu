import { applyPatch } from 'fast-json-patch';

const validURL = (str) => {
  var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
    '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
    '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
    '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
  return !!pattern.test(str);
}

export const patch = (req, res) => {
    try {
    const {patch, doc} = req.body;
    const document = applyPatch(doc, patch).newDocument;
    return res.status(200).json({ error: false, message: 'thumbnail generated', data: document });
    } catch (e) {
        return res.status(500).json({ error: true, message: e.message });
    }
}