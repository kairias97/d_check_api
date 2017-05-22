SELECT 
	CAST(id AS INT) id_paciente, 
    nombres, 
    apellidos, 
    correo,
    (SELECT COUNT(sv.*) FROM solicitud_virtual as sv 
     where sv.id_paciente = p.id AND sv.cancelada IS NULL AND sv.aceptada IS NULL) count_virtual_pendiente,
     (SELECT COUNT(sv.*) FROM solicitud_virtual as sv 
     where sv.id_paciente = p.id AND sv.cancelada IS NULL AND sv.aceptada = false) count_virtual_rechazado,
     (SELECT COUNT(sv.*) FROM solicitud_virtual as sv 
     where sv.id_paciente = p.id AND sv.cancelada IS NULL AND sv.aceptada = true) count_virtual_aceptado,
     (SELECT COUNT(sv.*) FROM solicitud_virtual as sv 
     where sv.id_paciente = p.id AND sv.cancelada = true AND sv.aceptada IS NULL) count_virtual_cancelado,
     (SELECT COUNT(sv.*) FROM solicitud_presencial as sv 
     where sv.id_paciente = p.id AND sv.cancelada IS NULL AND sv.aceptada IS NULL) count_normal_pendiente,
     (SELECT COUNT(sv.*) FROM solicitud_presencial as sv 
     where sv.id_paciente = p.id AND sv.cancelada IS NULL AND sv.aceptada = false) count_normal_rechazado,
     (SELECT COUNT(sv.*) FROM solicitud_presencial as sv 
     where sv.id_paciente = p.id AND sv.cancelada IS NULL AND sv.aceptada = true) count_normal_aceptado,
     (SELECT COUNT(sv.*) FROM solicitud_presencial as sv 
     where sv.id_paciente = p.id AND sv.cancelada = true AND sv.aceptada IS NULL) count_normal_cancelado
    FROM public.paciente as p
    WHERE p.id = $1
GROUP BY id, nombres, apellidos, correo