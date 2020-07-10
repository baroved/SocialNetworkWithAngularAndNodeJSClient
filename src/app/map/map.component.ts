import { Component, AfterViewInit, ViewChild, ElementRef, OnInit } from '@angular/core';
import { MouseEvent } from '@agm/core';

import { google } from 'google-maps';
import { PostService } from '../services/post/post.service';
import { Subject } from 'rxjs';
import { FilterPostsService } from '../services/filtersPosts/filter-posts.service';



@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements AfterViewInit {
  title = 'angular-gmap';
  @ViewChild('mapContainer', { static: false }) gmap: ElementRef;
  map: google.maps.Map;
  lat: number;
  lng: number;
  coordinates: google.maps.LatLng;
  mapOptions: google.maps.MapOptions;
  markersList: google.maps.Marker[] = [];
  posts: any = [];
  infowindow: google.maps.InfoWindow;


  constructor(private filterPost: FilterPostsService, private postService: PostService) {
    this.infowindow = new google.maps.InfoWindow({
      content: 'message'
    });
    this.suscribing();
  }

  suscribing() {
    this.filterPost.subject.subscribe(res => {
      this.posts = res;
      this.markersList = [];
      this.init();
      debugger;
    });
  }

  InitPost(callback) {
    this.postService.GetPosts().subscribe(res => {
      this.posts = res.data;
      debugger;
      callback();
    });
  }

  ngAfterViewInit() {
    this.InitPost(() => {
      this.init();
    });
  }

  init() {
    this.getCurrentLocation(() => {
      this.coordinates = new google.maps.LatLng(this.lat, this.lng);
      this.mapOptions = {
        center: this.coordinates,
        zoom: 8
      };
      this.markers();
    });
  }


  AddMarkersByPost(callback) {
    if (this.posts.length !== 0) {
      this.posts.forEach(element => {
        this.markersList.push(new google.maps.Marker({
          position: new google.maps.LatLng(element.Location.points[0].x, element.Location.points[0].y),
          map: this.map,
          icon: { url: element.ImageSrc[0], scaledSize: new google.maps.Size(70, 90) }
        }));
      });
    }
    callback();
  }

  AddEventListener(marker, map) {
    marker.addListener('mouseover', () => {
      this.infowindow.open(map, marker);
    });
  }


  markers() {
    this.markersList.push(new google.maps.Marker({
      position: this.coordinates,
      map: this.map,
      label: 'You'
    }));
    this.AddMarkersByPost(() => {
      this.mapInitializer();
    });
  }

  mapInitializer() {
    this.map = new google.maps.Map(this.gmap.nativeElement,
      this.mapOptions);
    this.markersList.forEach(marker => {
      marker.setMap(this.map);
      this.AddEventListener(marker, this.map);
    });
  }

  getCurrentLocation(callback) {
    navigator.geolocation.getCurrentPosition(position => {
      this.lat = position.coords.latitude;
      this.lng = position.coords.longitude;
      callback();
    });
  }
}

