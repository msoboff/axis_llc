Uploads = new FS.Collection('uploads', {
    stores:[new FS.Store.FileSystem('uploads'/*, {path:'~/uploads'}*/)]
});

Social = new FS.Collection('social', {
    stores:[new FS.Store.FileSystem('social'/*, {path:'~uploads'}*/)]//needed to comment this out in order for it to work on production server
});

hPackage = new FS.Collection('hPackage', {
    stores:[new FS.Store.FileSystem('hPackage'/*, {path:'~uploads'}*/)]
});