var APP_DATA = {
  "scenes": [
    {
      "id": "0-quartojpg",
      "name": "quarto.jpg",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.0505924665153579,
          "pitch": 0.48721817062611095,
          "rotation": 0,
          "target": "1-tvjpg"
        },
        {
          "yaw": 0.7913274261470384,
          "pitch": 0.6194561390610289,
          "rotation": 5.497787143782138,
          "target": "2-cozinha-mesa-centraljpg"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-tvjpg",
      "name": "tv.jpg",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.06164303826522577,
          "pitch": 0.3896911976001398,
          "rotation": 0,
          "target": "0-quartojpg"
        },
        {
          "yaw": 1.02727511172432,
          "pitch": 0.43499561095759276,
          "rotation": 0,
          "target": "2-cozinha-mesa-centraljpg"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-cozinha-mesa-centraljpg",
      "name": "cozinha mesa central.jpg",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.4271653950988892,
          "pitch": 0.4810624479565746,
          "rotation": 11.780972450961727,
          "target": "0-quartojpg"
        },
        {
          "yaw": -2.529866190218634,
          "pitch": 0.7650949592255412,
          "rotation": 0,
          "target": "1-tvjpg"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "casa gillliard TESTE",
  "settings": {
    "mouseViewMode": "qtvr",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
