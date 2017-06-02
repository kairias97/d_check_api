SELECT 
CAST(sv.id AS INT) id_solicitud_virtual,
CAST(sv.id_paciente AS INT) id_paciente,
CAST(sv.id_doctor AS INT) id_doctor,
concat(to_char(sv.fecha_solicitada, 'DD/MM/YYYY'), ' - ',sv.hora_solicitada) fecha_hora_solicitada,
sv.aceptada,
sv.cancelada,
CASE d.sexo WHEN true THEN concat('Dr. ',d.nombres, ' ', d.apellidos) ELSE concat('Dr. ',d.nombres, ' ', d.apellidos) END  nombre_dr 
FROM solicitud_virtual sv INNER JOIN doctor d ON sv.id_doctor= d.id
WHERE sv.id_paciente=$1;