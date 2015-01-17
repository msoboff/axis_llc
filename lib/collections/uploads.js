Uploads = new FS.Collection('uploads', {
    stores:[new FS.Store.FileSystem('uploads', {path:'~/projectUploads'})]
});

Social = new FS.Collection('social', {
    stores:[new FS.Store.FileSystem('social', {path:'~/socialUploads'})]
});

hPackage = new FS.Collection('hPackage', {
    stores:[new FS.Store.FileSystem('hPackage', {path:'~/hPackageUploads'})]
});