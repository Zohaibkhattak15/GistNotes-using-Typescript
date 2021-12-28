
export const publicFilesRecord = (publicGistsDisplay: any) => {
    if (publicGistsDisplay) {
        let publicFiles = publicGistsDisplay.map((files: any) => Object.keys(files.files)[0]);
        return publicFiles;
    }
}
export const privateFilesRecord = (privateGistsDisplay: any) => {
    if (privateGistsDisplay) {
        let privateFiles = privateGistsDisplay.map((files: any) => Object.keys(files.files)[0]);
        return privateFiles;
    }
}




