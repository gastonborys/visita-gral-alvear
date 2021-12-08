import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Comercios } from '../models/comercios';
import { map } from 'rxjs/operators';


@Injectable({
    providedIn: 'root'
})
export class ComerciosService {

    constructor(
        private afs: AngularFirestore,
    )
    {}

    public getAll(): Observable<any>{
        return this.afs.collection<Comercios>('comercios', ref => ref.orderBy('rubro')).snapshotChanges().pipe(
            map(actions => actions.map(a =>{
                const data  = a.payload.doc.data() as Comercios;
                data.id     = a.payload.doc.id;
                return data;
            }))
        );
    }

    public getItems(secId: string): Observable<any>{
        return this.afs.collection<Comercios>('comercios/' + secId + '/items', ref => ref.where('activo', '==', true).orderBy('orden')).snapshotChanges().pipe(
            map(actions => actions.map(a =>{                
                return a.payload.doc.data();
            }))
        );
    }
} 
