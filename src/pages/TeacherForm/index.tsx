import React, {FormEvent, useState} from 'react';
import Input from '../../components/Input';
import PageHeader from '../../components/PageHeader';
import warningIcon from '../../assets/images/icons/warning.svg'
import "./styles.css"
import {useHistory} from 'react-router-dom';
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';
import api from '../../services/api';

function TeacherForm(){

    const history = useHistory();
    const [name, setName] = useState('');
    const [avatar, setAvatar] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [bio, setBio] = useState('');
    const [subject, setSubject] = useState('');
    const [cost, setCost] = useState('');

    const [scheduleItems, setScheduleItem] = useState([
        { week_day:0, from:'', to:'' }
    ]);

    function addNewScheduleItem(){
        setScheduleItem([...scheduleItems,
        { week_day:0, from:'', to:'' }
    ]);
    }
    /*!notetoself!*/
    //setScheduleItemValue(index, 'week_day',1 (segunda))
    //A maneira como isso foi projetado não permite criar horários diferentes no mesmo dia da semana
    //pois isso trás problemas com a key, que no momento é o próprio value do week_day. lol
    function setScheduleItemValue(position: number, field:string, value:string){
        const newArray = scheduleItems.map((scheduleItem, index) => {
            if(index === position) {
                return {...scheduleItem, [field]:value}
            }

            return scheduleItem;
        });
        console.log(newArray);
        setScheduleItem(newArray);
    }

    function handleCreateClass(e: FormEvent){
        e.preventDefault();

        api.post('classes', {
            name,
            avatar,
            whatsapp,
            bio,
            subject,
            cost: Number(cost),
            schedule: scheduleItems
        }).then(()=> {
            alert('Cadastro realizado com sucesso!');
            history.push('/');
        }).catch(()=>{
            alert('Erro no cadastro!');
        })
    }
    return(
        <div id="page-teacher-form" className="container">
           <PageHeader 
           title="Que incrível que você quer dar aulas."
           description="O primeiro passo é preencher esse formulário de inscrição"
           />

           <main>
               <form onSubmit={handleCreateClass}>
                <fieldset>
                    <legend>Seus dados</legend>
                            <Input 
                            name="name" 
                            label="Nome completo"
                            value={name}
                            onChange={(e)=>{setName(e.target.value)}}
                            />
                            <Input name="avatar" label="Avatar"
                            value={avatar}
                            onChange={(e)=>{setAvatar(e.target.value)}}
                            />
                            <Input name="whatsapp" label="Whatsapp"
                            value={whatsapp}
                            onChange={(e)=>{setWhatsapp(e.target.value)}}
                            />
                            <Textarea name="bio" label="Biografia"
                            value={bio}
                            onChange={(e)=>{setBio(e.target.value)}}
                            />
                </fieldset>
                <fieldset>
                    <legend>Sobre a aula</legend>
                            <Select 
                            options={[
                                {value:'Artes', label:'Artes'},
                                {value:'Matemática', label:'Matemática'},
                                {value:'Física', label:'Física'},
                                {value:'Português', label:'Português'},
                                {value:'Química', label:'Química'},
                                {value:'Geografia', label:'Geografia'},
                                {value:'Biologia', label:'Biologia'},
                                {value:'Literatura', label:'Literatura'},
                                {value:'Mágica', label:'Mágica'},
                            ]}
                            name="subject" 
                            label="Matéria"
                            value={subject}
                            onChange={(e)=>{setSubject(e.target.value)}}
                            />
                            <Input 
                            name="cost" 
                            label="Custo da sua hora por aula"
                            value={cost}
                            onChange={(e)=>{setCost(e.target.value)}}
                            />
                </fieldset>
                <fieldset>
                    <legend>
                        Horários disponíveis
                        <button type="button" onClick={addNewScheduleItem}>
                            + Novo horário
                        </button>
                    </legend>

                    {scheduleItems.map((scheduleItem,index) => {
                        return(
                            <div key={scheduleItem.week_day} className="schedule-item">
                                <Select 
                                options={[
                                    {value:'0', label:'Domingo'},
                                    {value:'1', label:'Segunda-feira'},
                                    {value:'2', label:'Terça-feira'},
                                    {value:'3', label:'Quarta-feira'},
                                    {value:'4', label:'Quinta-feira'},
                                    {value:'5', label:'Sexta-feira'},
                                    {value:'6', label:'Sábado'},                                    
                                ]}
                                value={scheduleItem.week_day}
                                name="week-day"
                                label="Dia da semana"
                                onChange={e => setScheduleItemValue(index, 'week_day',e.target.value)}
                            />
                            <Input 
                            name="from" 
                            label="Das" 
                            type="time"
                            value={scheduleItem.from}
                            onChange={e => setScheduleItemValue(index, 'from',e.target.value)}/>       
                            <Input 
                            name="to" 
                            label="Até" 
                            type="time"
                            value={scheduleItem.to}
                            onChange={e => setScheduleItemValue(index, 'to',e.target.value)}
                            />       
                        </div>
                        );
                    })}

                    
                </fieldset>

                    <footer>
                        <p>
                            <img src={warningIcon} alt="Aviso importante"/>
                            Importante! <br/>
                            Preencha todos os dados
                        </p>
                        <button type="submit">Salvar cadastro</button>
                    </footer>
                </form>
           </main>
        </div>
    );

}

export default TeacherForm;