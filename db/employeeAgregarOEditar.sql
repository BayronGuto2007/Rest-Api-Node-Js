CREATE DEFINER=`root`@`localhost` PROCEDURE `employeeAgregarOEditar`(
	in _id int,
    in _nombre varchar(64),
    in _salario int
)
begin
	IF _id = 0 then
		insert into employees (nombre, salario)
        values (_nombre, _salario);
	set _id = last_insert_id();
    else
		update employees
        set
			nombre = _nombre,
            salario = _salario
            where id = _id;
    end if;	    
    select _id as id;
END