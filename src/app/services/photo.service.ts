import { Injectable } from '@angular/core';
import {
  Camera,
  Photo,
  CameraSource,
  CameraResultType,
} from '@capacitor/camera';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { Preferences } from '@capacitor/preferences';


@Injectable({
  providedIn: 'root',
})
export class PhotoService {

  constructor() {}


  public async addNewToGallery(){
    //Take a photo
    const capturePhoto = await Camera.getPhoto
    
    ({
      resultType:CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100
    })
  }
}
