create table user_preferences (
    user_id integer primary key references users (id) on delete cascade,
    theme varchar(64),
    locale varchar(16),
    compact_board boolean not null
);
