

{TouchableOpacity
style={{ width: 100, height: 50, backgroundColor: 'yellow' }}
onPress={() => {
 iveModules.ReadImageData.readImage('https://scontent.xx.fbcdn.net/v/t1.0-1/p50x50/20604360_1703103496666039_8094805324934280395_n.jpg?oh=198176f9d697e895217d093b8e8f6cb5&oe=5A94BEEA', (base64Image) => {
!//     // Do something here.
!//     console.log('base64Image',base64Image)
!// });
setTimeout(() => {
console.log('this.toPassDBKevin', this.toPassDBKevin);
}, 10000);*
this.friendsKevin.map((item, index) => {
const fs = RNFetchBlob.fs;*
let imagePath = null;*/
RNFetchBlob
.config({
fileCache: true,
})
.fetch('GET', item.picture.data.url)
!// the image is now dowloaded to device's storage
.then((resp) => {
!// the image path you can use it directly with Image component
imagePath = resp.path();
reCOLOR_GRAY_TRANSPARENTturn resp.readFile('base64');
})
.then((base64Data) => {
!// here's base64 encoded image
!//     console.log('base64Data', base64Data.slice(base64Data.length - 20, base64Data.length));*
this.toPassDBKevin.push({
uid: `${base64Data.slice(base64Data.length - 20, base64Data.length)}${item.name}${base64Data.slice(base64Data.length - 50, base64Data.length - 45)}`,
!// uid: `${item.name}${base64Data}`,
upper_bound: 45,
bottom_bound: 20,
user_name: item.name,
picture_data: item.picture,
});
// remove the file from storage
return fs.unlink(imagePath);
});
});
}}
/>
<TouchableOpacity
style={{ width: 100, height: 50, backgroundColor: 'red' }}
onPress={() => {
!// NativeModules.ReadImageData.readImage('https://scontent.xx.fbcdn.net/v/t1.0-1/p50x50/20604360_1703103496666039_8094805324934280395_n.jpg?oh=198176f9d697e895217d093b8e8f6cb5&oe=5A94BEEA', (base64Image) => {
!//     // Do something here.
!//     console.log('base64Image',base64Image)
!// });
setTimeout(() => {
console.log('this.toPassDBAmin', this.toPassDBAmin);
}, 10000);*
this.friendsAmin.map((item, index) => {
const fs = RNFetchBlob.fs;*
let imagePath = null;*/
RNFetchBlob
.config({
fileCache: true,
})
.fetch('GET', item.picture.data.url)
!// the image is now dowloaded to device's storage
.then((resp) => {
!// the image path you can use it directly with Image component
imagePath = resp.path();
return resp.readFile('base64');
})
.then((base64Data) => {
!// here's base64 encoded image
!// console.log('base64Data', base64Data.slice(base64Data.length - 20, base64Data.length));*
this.toPassDBAmin.push({
uid: `${base64Data.slice(base64Data.length - 20, base64Data.length)}${item.name}${base64Data.slice(base64Data.length - 50, base64Data.length - 45)}`,
!// uid: `${item.name}${base64Data}`,
upper_bound: 45,
bottom_bound: 20,
user_name: item.name,
picture_data: item.picture,
});
!// remove the file from storage
return fs.unlink(imagePath);
});
});
}}
/>
<TouchableOpacity
style={{ width: 20, height: 30, backgroundColor: 'green' }}
onPress={() => {
let mutualFriends = [];
this.toPassDBAmin.map((item) => {
this.toPassDBKevin.map((innerItem) => {
if (item.uid === innerItem.uid) {
mutualFriends.push({ AminFriend: item, kevinFriend: innerItem });
}
});
});
console.log('mutualFriends', mutualFriends);
}}
!/>
