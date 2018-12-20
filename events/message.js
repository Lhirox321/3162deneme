
    if (perms < cmd.conf.permLevel) return;
    cmd.run(client, message, params, perms);
  }

};
