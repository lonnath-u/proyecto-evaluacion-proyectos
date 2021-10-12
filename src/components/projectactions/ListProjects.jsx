import React from "react";
import { Table } from "react-bootstrap";
import File from '../../images/file.png';
import ModifyProject from "./ModifyProject";
import EraseProject from "./EraseProject";
export default function ListProjects({admin}){
    return(
        <>
            <div>
                <h1>
                    Proyectos {admin ? "Disponibles" : "Creados"}
                </h1>

                <Table striped bordered hover responsive>
                    <thead>
                        <tr>
                            <th>Titulo</th>
                            <th>Autores</th>
                            <th>Estado</th>
                            {admin ? <th>Evaluacion</th> : <></>}
                            <th>Fecha Proyecto</th>
                            <th>Archivos</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Nombre Prueba #1</td>
                            <td>Mark</td>
                            <td>Rechazado</td>
                            {admin ? <th>0</th> : <></>}
                            <td>12/12/12</td>
                            <td>
                                <a href="/" className="w-100">
                                    <div className="w-25 mx-auto">
                                        <img src={File} alt="" width="30" />
                                    </div>
                                </a>
                            </td>
                            <td>
                                <ModifyProject data = {admin ? false : true}/>
                                {admin ? <div></div> : <EraseProject  data = {true}/>}
                            </td>


                        </tr>
                        <tr>
                            <td>Nombre Prueba #2</td>
                            <td>Mark</td>
                            <td>Pendiente</td>
                            {admin ? <th>0</th> : <></>}
                            <td>12/12/12</td>
                            <td>
                                <a href="/" className="w-100">
                                    <div className="w-25 mx-auto">
                                        <img src={File} alt="" width="30" />
                                    </div>
                                </a>
                            </td>
                            <td>
                                <ModifyProject />
                                {admin ? <div></div>: <EraseProject />}
                            </td>


                        </tr>
                        <tr>
                            <td>Nombre Prueba #3</td>
                            <td>Mark</td>
                            <td>Pendiente</td>
                            {admin ? <th>0</th> : <></>}
                            <td>12/12/12</td>
                            <td>
                                <a href="/" className="w-100">
                                    <div className="w-25 mx-auto">
                                        <img src={File} alt="" width="30" />
                                    </div>
                                </a>
                            </td>
                            <td>
                                <ModifyProject />
                                {admin ? <div></div>: <EraseProject />}
                            </td>


                        </tr>
                        <tr>
                            <td>Nombre Prueba #4</td>
                            <td>Mark</td>
                            <td>Aprobado</td>
                            {admin ? <th>10</th> : <></>}
                            <td>12/12/12</td>
                            <td>
                                <a href="/" className="w-100">
                                    <div className="w-25 mx-auto">
                                        <img src={File} alt="" width="30" />
                                    </div>
                                </a>
                            </td>
                            <td>
                                <ModifyProject data = {admin ? false : true}/>
                                {admin ? <div></div> : <EraseProject  data = {true}/>}
                            </td>


                        </tr>
                        <tr>
                            <td>Nombre Prueba #5</td>
                            <td>Mark</td>
                            <td>Pendiente</td>
                            {admin ? <th>0</th> : <></>}
                            <td>12/12/12</td>
                            <td>
                                <a href="/" className="w-100">
                                    <div className="w-25 mx-auto">
                                        <img src={File} alt="" width="30" />
                                    </div>
                                </a>
                            </td>
                            <td>
                                <ModifyProject />
                                {admin ? <div></div>: <EraseProject />}
                            </td>


                        </tr>
                        <tr>
                            <td>Nombre Prueba #6</td>
                            <td>Mark</td>
                            <td>Pendiente</td>
                            {admin ? <th>0</th> : <></>}
                            <td>12/12/12</td>
                            <td>
                                <a href="/" className="w-100">
                                    <div className="w-25 mx-auto">
                                        <img src={File} alt="" width="30" />
                                    </div>
                                </a>
                            </td>
                            <td>
                                <ModifyProject />
                                {admin ? <div></div>: <EraseProject />}
                            </td>


                        </tr>
                        <tr>
                            <td>Nombre Prueba #7</td>
                            <td>Mark</td>
                            <td>Pendiente</td>
                            {admin ? <th>0</th> : <></>}
                            <td>12/12/12</td>
                            <td>
                                <a href="/" className="w-100">
                                    <div className="w-25 mx-auto">
                                        <img src={File} alt="" width="30" />
                                    </div>
                                </a>
                            </td>
                            <td>
                                <ModifyProject />
                                {admin ? <div></div>: <EraseProject />}
                            </td>


                        </tr>
                        <tr>
                            <td>Nombre Prueba #8</td>
                            <td>Mark</td>
                            <td>Pendiente</td>
                            {admin ? <th>0</th> : <></>}
                            <td>12/12/12</td>
                            <td>
                                <a href="/" className="w-100">
                                    <div className="w-25 mx-auto">
                                        <img src={File} alt="" width="30" />
                                    </div>
                                </a>
                            </td>
                            <td>
                                <ModifyProject />
                                {admin ? <div></div>: <EraseProject />}
                            </td>


                        </tr>
                        <tr>
                            <td>Nombre Prueba #9</td>
                            <td>Mark</td>
                            <td>Pendiente</td>
                            {admin ? <th>0</th> : <></>}
                            <td>12/12/12</td>
                            <td>
                                <a href="/" className="w-100">
                                    <div className="w-25 mx-auto">
                                        <img src={File} alt="" width="30" />
                                    </div>
                                </a>
                            </td>
                            <td>
                                <ModifyProject />
                                {admin ? <div></div>: <EraseProject />}
                            </td>


                        </tr>
                        <tr>
                            <td>Nombre Prueba #10</td>
                            <td>Mark</td>
                            <td>Pendiente</td>
                            {admin ? <th>0</th> : <></>}
                            <td>12/12/12</td>
                            <td>
                                <a href="/" className="w-100">
                                    <div className="w-25 mx-auto">
                                        <img src={File} alt="" width="30" />
                                    </div>
                                </a>
                            </td>
                            <td>
                                <ModifyProject />
                                {admin ? <div></div>: <EraseProject />}
                            </td>


                        </tr>
                    </tbody>
                </Table>
            </div>
        </>
    )
}