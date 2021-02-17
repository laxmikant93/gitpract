_satellite.pushAsyncScript(function(event, target, $variables){
  if (typeof DDO !== 'undefined'){
        if (typeof DDO.cardData !== 'undefined'){
            if (typeof DDO.cardData.container_type !== 'undefined'){
                window._uxa = window._uxa || [];
                window._uxa.push(["trackDynamicVariable", {key: 'Card Cont Type', value: DDO.cardData.container_type} ]);
            }
        } 
    }

    if (typeof DDO !== 'undefined'){
        if (typeof DDO.cardData !== 'undefined'){
            if (typeof DDO.cardData.card_name !== 'undefined'){
                window._uxa = window._uxa || [];
                window._uxa.push(["trackDynamicVariable", {key: 'Card Name', value: DDO.cardData.card_name} ]);
            }
        } 
    }

    if (typeof DDO !== 'undefined'){
        if (typeof DDO.cardData !== 'undefined'){
            if (typeof DDO.cardData.content_type !== 'undefined'){
                window._uxa = window._uxa || [];
                window._uxa.push(["trackDynamicVariable", {key: 'Card Type', value: DDO.cardData.content_type} ]);
            }
        } 
    }
});
