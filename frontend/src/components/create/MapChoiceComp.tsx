import React, {useEffect, useState} from 'react';
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps'
import Col from "react-bootstrap/Col";
import {Row} from "react-bootstrap";
import { TextField } from "@mui/material";
import { fetchYandexAddress } from "../../api/discountAPI";
import Button from '@mui/material/Button';
import {useDispatch} from "react-redux";

const MapChoiceComp = (props:any) => {
    const [addressString, setAddressString] = useState('Волгоград, ');
    const [coordinats, setCoordinats] = useState([]);

    const dispatch = useDispatch();



    useEffect(() => {

    }, [coordinats])
    let callFetchYandexAddress = ():void => {
        if(!addressString) return;
        fetchYandexAddress({address: addressString})
            .then((data: any) => {
                dispatch({type: "MAP", payload: {address: addressString, coordinates: data.response.GeoObjectCollection.featureMember[0].GeoObject.Point.pos.split(' ').reverse()}})
                setCoordinats(data.response.GeoObjectCollection.featureMember[0].GeoObject.Point.pos.split(' ').reverse())
            })
            .catch((error: any) => {
                if (error.response.data) {
                    alert(
                        `${error.response.data.message}${error.response.status}`
                    );
                } else {
                    console.log("dev", error);
                    alert("Ошибка 111 - Обратитесь к администратору!");
                }
            });
    };

    // ==========================================================================================================

    return (
        <>

                <Col xs={12} md={{ span: 6, order: 2 }}>

                        <YMaps>
                        <section className="map container">

                            { +coordinats.length ?
                                <Map
                                    state={{
                                        center: coordinats, // координаты центра карты 48.512741, 44.535905
                                        zoom: 13,
                                    }}
                                    width="100%"
                                    height={300}
                                    // включаем модули, отвечающие за всплывающие окна над геообъектами
                                    modules={['geoObject.addon.balloon', 'geoObject.addon.hint']}
                                >
                                    <Placemark
                                        geometry={coordinats}
                                        options={{
                                            preset: 'islands#oliveStretchyIcon', // список темплейтов на сайте яндекса
                                            iconColor: 'green', // цвет иконки
                                        }}
                                        properties={{
                                            iconContent: "Вы здесь!", // пару символов помещается
                                            hintContent: '<em>кликни меня</em>',
                                            balloonContent: `<div class="my-balloon">
                                                  <h4>КофеМаг</h4>
                                                  <p>
                                                    Скидка 50% на кофе
                                                  </p>
                                                  <a href="#">Смотреть магазин</a>
                                                </div>`,
                                        }}
                                    />
                                </Map>
                            :
                                <Map
                                    state={{
                                    center: [48.707067, 44.516975],
                                    zoom: 10,
                                }}
                                     width="100%"
                                     height={300} >
                                </Map>
                            }
                        </section>
                    </YMaps>
                </Col>


                <Col xs={12} md={{ span: 6, order: 1 }}>
                        <TextField id="outlined-basic"  variant="outlined" fullWidth
                                   sx={{ mb: 1 }}

                                    error={Boolean(+coordinats.length == 0 && props.flag == 0)}
                                   value={addressString}
                                   onChange={(e) => setAddressString(e.target.value)}
                                   label="Введите адрес (начните со слова Волгоград)" />

                        <Button variant="contained"
                                onClick={callFetchYandexAddress}>Найти на карте</Button>


                </Col>

        </>
    );
};

export default MapChoiceComp;
