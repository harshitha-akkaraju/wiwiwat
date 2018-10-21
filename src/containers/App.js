import React, { Component } from 'react';
import './App.css';

import Header from '../components/Header'
import Footer from '../components/Footer'

import SearchForm from './SearchForm'

import Camera from 'react-html5-camera-photo';
import 'react-html5-camera-photo/build/css/index.css';

// import request from 'request';
import $ from "jquery";

class App extends Component {
  makeblob(dataURL) {
    var BASE64_MARKER = ';base64,';
    if (dataURL.indexOf(BASE64_MARKER) == -1) {
        var parts = dataURL.split(',');
        var contentType = parts[0].split(':')[1];
        var raw = decodeURIComponent(parts[1]);
        return new Blob([raw], { type: contentType });
    }
    var parts = dataURL.split(BASE64_MARKER);
    var contentType = parts[0].split(':')[1];
    var raw = window.atob(parts[1]);
    var rawLength = raw.length;

    var uInt8Array = new Uint8Array(rawLength);

    for (var i = 0; i < rawLength; ++i) {
        uInt8Array[i] = raw.charCodeAt(i);
    }

    return new Blob([uInt8Array], { type: contentType });
  }

  onTakePhoto(imageUrl) {
    var subscriptionKey = "8e269d3f5e534af48735e1c98e6bd822";

    let imageBlob = this.makeblob(imageUrl);

    console.group();
    // console.log(imageUrl);
    console.log(imageBlob.toString());
    console.log(JSON.stringify({"data": imageBlob }));
    console.groupEnd();

    // You must use the same location in your REST call as you used to get your
    // subscription keys. For example, if you got your subscription keys from
    // westus, replace "westcentralus" in the URL below with "westus".
    const uriBase =
        'https://westcentralus.api.cognitive.microsoft.com/vision/v2.0/analyze';
    
    // imageUrl = 'http://upload.wikimedia.org/wikipedia/commons/3/3c/Shaki_waterfall.jpg';
    // imageUrl = 'https://upload.wikimedia.org/wikipedia/commons/f/f8/Heiligengrabe%2C_Kloster_Stift_zum_Heiligengrabe%2C_Abtei%2C_Fenster_im_Dormitorium_--_2017_--_9972.jpg';
    
    // Request parameters.
    const params = {
        'visualFeatures': 'Categories,Description,Color',
        'details': '',
        'language': 'en'
    };
    
    const options = {
        uri: uriBase,
        qs: params,
        body: this.makeblob(imageUrl),
        headers: {
          'processData': false,
          'Content-Type': 'application/octet-stream',
          'Ocp-Apim-Subscription-Key' : subscriptionKey
        }
    };

    $.ajax({
        url: uriBase + "?" + $.param(params),
        type: 'POST',
        processData: false,
        headers: {
          'Ocp-Apim-Subscription-Key': subscriptionKey
        },
        contentType: 'application/octet-stream',
        data: this.makeblob(imageUrl)
      })
      .done(function (data) {
        console.log(data);
      })
      .fail(function (error) {
        console.log(error);
      });
    
    /*
    request.post(options, (error, response, body) => {
      if (error) {
        console.log('Error: ', error);
        return;
      }
      let jsonResponse = JSON.stringify(JSON.parse(body), null, '  ');
      console.log('JSON Response\n');
      console.log(jsonResponse);
    });
    */
  }

  render() {
    return (
      <React.Fragment>
        <Header />
        <article id='page'>
          <SearchForm />
          <Camera
            onTakePhoto = { (dataUri) => { this.onTakePhoto(dataUri); } }
          />
        </article>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
