
export const fileupload = async (file) => {
    if (!file) throw new Error('Dont exist file..');
    const cloudinaryUrl = `https://api.cloudinary.com/v1_1/ddabw5dyj/upload`;
    const formData = new FormData();
    formData.append('upload_preset', 'react-journal');
    formData.append('file', file);
    try {
        const resp = await fetch(cloudinaryUrl, {
            method: 'POST',
            body: formData
        })
        if (!resp.ok) throw new Error('Failed to upload Image..');
        const cloudinaryResp = await resp.json();
        return cloudinaryResp.secure_url;

    } catch (error) {
        console.log(error);
        throw new Error(error.message);
    }
};