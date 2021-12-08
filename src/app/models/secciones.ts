export class Secciones {
    constructor(
        public id:              string,
        public orden:           number,
        public activa:          boolean,
        public seccion:         string,
        public imagen:          string,
        public items:           any,
    ){}
}

export class SeccionItem{
    constructor(
        public id:              string,
        public activo:          boolean,
        public orden:           number,
        public titulo:          string,
        public descripcion:     string,
        public introduccion:    string,
        public imagen:          string,
    ){}
}
