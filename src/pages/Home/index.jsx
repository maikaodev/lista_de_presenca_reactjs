// Hooks
import { useState, useEffect } from "react";

// CSS
import "./style.css";

// Components
import { Card } from "~/components";

export const Home = () => {
  /**
   * ESTADO
   * Nome da varíavel | Nome da função
   * useState - Pode receber um parâmetro inicial que pode ser atualizado.
   * Podemos por condicional neles, etc.
   * */

  const [studentName, setStudentName] = useState("");
  const [students, setStudents] = useState([]);
  const [user, setUser] = useState({ name: "", avatar: "" });

  function handleAddStudent() {
    const newStudent = {
      name: studentName,
      time: new Date().toLocaleTimeString("pt-br", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      }),
    };
    setStudents((prevState) => [...prevState, newStudent]);
  }

  /**
   *  Use Effect
   *  É executado quando a interface é renderizada por PADRÃO
   *  [] - Passamos as condições na qual esse hook vai ser executado
   *  Ex.: Podemos passar o estado 'students'
   * */

  useEffect(() => {
    fetch("https://api.github.com/users/maikaodev")
      .then((response) => response.json())
      .then((data) => {
        setUser({
          name: data.name,
          avatar: data.avatar_url,
        });
      });
  }, []);

  return (
    <div className="container">
      <header>
        <h1>Lista de Presença</h1>
        <div>
          <strong>{user.name}</strong>
          <img src={user.avatar} alt="Foto de perfil" />
        </div>
      </header>

      <input
        type="text"
        placeholder="Digite um nome..."
        onChange={(e) => setStudentName(e.target.value)}
      />

      <button type="button" onClick={handleAddStudent}>
        Adicionar
      </button>

      {/* 
      Estrutura de repetição deve ter uma key
       */}

      {students.map((student) => (
        <Card key={student.time} name={student.name} time={student.time} />
      ))}
    </div>
  );
};
