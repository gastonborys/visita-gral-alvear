import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Recorridos } from '../models/recorridos';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class RecorridosService {

    constructor(
        private afs: AngularFirestore,
    )
    {}

    public getAll(): Observable<any>{
        return this.afs.collection<Recorridos>('recorridos', ref => ref.where('activo', '==', true).orderBy('orden')).snapshotChanges().pipe(
            map(actions => actions.map(a =>{
                const data  = a.payload.doc.data() as Recorridos;
                data.id     = a.payload.doc.id;
                return data;
            }))
        );
    }

    public getItems(secId: string): Observable<any>{
        return this.afs.collection<Recorridos>('recorridos/' + secId + '/items', ref => ref.where('activo', '==', true).orderBy('orden')).snapshotChanges().pipe(
            map(actions => actions.map(a =>{                
                return a.payload.doc.data();
            }))
        );
    }


}
